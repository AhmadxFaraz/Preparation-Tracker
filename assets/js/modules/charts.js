(function () {
  const TOPIC_PALETTE = {
    blue: {
      vibrant: 'rgba(68, 238, 255, 0.98)',
      remaining: 'rgba(68, 238, 255, 0.16)',
      doneStart: 'rgba(18, 197, 255, 0.95)',
      doneEnd: 'rgba(120, 250, 255, 1)',
      doneHoverStart: 'rgba(120, 250, 255, 1)',
      doneHoverEnd: 'rgba(203, 255, 255, 1)',
      remainingStart: 'rgba(36, 104, 122, 0.28)',
      remainingEnd: 'rgba(16, 45, 56, 0.18)'
    },
    indigo: {
      vibrant: 'rgba(164, 173, 255, 0.98)',
      remaining: 'rgba(164, 173, 255, 0.16)',
      doneStart: 'rgba(117, 135, 255, 0.95)',
      doneEnd: 'rgba(194, 206, 255, 1)',
      doneHoverStart: 'rgba(194, 206, 255, 1)',
      doneHoverEnd: 'rgba(231, 236, 255, 1)',
      remainingStart: 'rgba(74, 87, 141, 0.28)',
      remainingEnd: 'rgba(36, 42, 77, 0.18)'
    },
    purple: {
      vibrant: 'rgba(222, 145, 255, 0.98)',
      remaining: 'rgba(222, 145, 255, 0.16)',
      doneStart: 'rgba(188, 106, 255, 0.95)',
      doneEnd: 'rgba(233, 177, 255, 1)',
      doneHoverStart: 'rgba(233, 177, 255, 1)',
      doneHoverEnd: 'rgba(246, 221, 255, 1)',
      remainingStart: 'rgba(103, 58, 133, 0.28)',
      remainingEnd: 'rgba(53, 23, 77, 0.18)'
    },
    teal: {
      vibrant: 'rgba(93, 248, 220, 0.98)',
      remaining: 'rgba(93, 248, 220, 0.16)',
      doneStart: 'rgba(45, 226, 190, 0.95)',
      doneEnd: 'rgba(164, 255, 233, 1)',
      doneHoverStart: 'rgba(164, 255, 233, 1)',
      doneHoverEnd: 'rgba(221, 255, 244, 1)',
      remainingStart: 'rgba(52, 120, 109, 0.28)',
      remainingEnd: 'rgba(21, 62, 56, 0.18)'
    },
    amber: {
      vibrant: 'rgba(255, 215, 102, 0.98)',
      remaining: 'rgba(255, 215, 102, 0.18)',
      doneStart: 'rgba(255, 195, 63, 0.95)',
      doneEnd: 'rgba(255, 231, 165, 1)',
      doneHoverStart: 'rgba(255, 231, 165, 1)',
      doneHoverEnd: 'rgba(255, 245, 211, 1)',
      remainingStart: 'rgba(132, 99, 44, 0.30)',
      remainingEnd: 'rgba(77, 58, 23, 0.20)'
    },
    fallback: {
      vibrant: 'rgba(203, 213, 225, 0.96)',
      remaining: 'rgba(148, 163, 184, 0.20)',
      doneStart: 'rgba(148, 163, 184, 0.92)',
      doneEnd: 'rgba(226, 232, 240, 1)',
      doneHoverStart: 'rgba(226, 232, 240, 1)',
      doneHoverEnd: 'rgba(248, 250, 252, 1)',
      remainingStart: 'rgba(100, 116, 139, 0.28)',
      remainingEnd: 'rgba(51, 65, 85, 0.18)'
    }
  };

  const centerTextPlugin = {
    id: 'centerText',
    afterDraw: function (chart) {
      const centerText = chart && chart.config && chart.config.options && chart.config.options.plugins && chart.config.options.plugins.centerText;
      if (!centerText || !centerText.display) return;

      const meta = chart.getDatasetMeta(0);
      if (!meta || !meta.data || !meta.data.length) return;

      const x = meta.data[0].x;
      const y = meta.data[0].y;
      const ctx = chart.ctx;

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = centerText.color || '#e2e8f0';
      ctx.font = centerText.font || '700 30px Inter';
      ctx.fillText(centerText.text || '0%', x, y);
      ctx.restore();
    }
  };

  const segmentGlowPlugin = {
    id: 'segmentGlow',
    afterDatasetsDraw: function (chart) {
      const segmentMeta = chart.$segmentMeta || [];
      const dataset = chart.data && chart.data.datasets && chart.data.datasets[0];
      const meta = chart.getDatasetMeta(0);
      if (!dataset || !meta || !meta.data) return;

      meta.data.forEach(function (arc, index) {
        const segment = segmentMeta[index];
        const value = Array.isArray(dataset.data) ? dataset.data[index] : 0;
        if (!segment || segment.state !== 'Done' || !value) return;

        const glowColor = Array.isArray(dataset.hoverBackgroundColor)
          ? dataset.hoverBackgroundColor[index]
          : (Array.isArray(dataset.backgroundColor) ? dataset.backgroundColor[index] : 'rgba(255,255,255,0.9)');

        const ctx = chart.ctx;
        const radius = (arc.innerRadius + arc.outerRadius) / 2;
        const width = Math.max(2, (arc.outerRadius - arc.innerRadius) * 0.56);

        ctx.save();
        ctx.globalAlpha = 0.22;
        ctx.strokeStyle = glowColor;
        ctx.lineWidth = width;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.65)';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(arc.x, arc.y, radius, arc.startAngle, arc.endAngle);
        ctx.stroke();
        ctx.restore();
      });
    }
  };

  if (typeof Chart !== 'undefined' && Chart.register) {
    Chart.register(centerTextPlugin, segmentGlowPlugin);
  }

  function safePercent(done, total) {
    if (!total) return 0;
    return Math.round((done / total) * 100);
  }

  function getTopicPalette(colorKey) {
    return TOPIC_PALETTE[colorKey] || TOPIC_PALETTE.fallback;
  }

  function getTopicStats(data) {
    if (!Array.isArray(data)) return [];

    return data.map(function (topic, index) {
      const tasks = topic && Array.isArray(topic.tasks) ? topic.tasks : [];
      const total = tasks.length;
      const done = tasks.filter(function (task) { return task && task.completed; }).length;
      const remaining = total - done;
      const palette = getTopicPalette(topic && topic.color);

      return {
        topicIndex: index,
        title: topic && topic.title ? topic.title : `Topic ${index + 1}`,
        shortLabel: `Topic ${index + 1}`,
        total: total,
        done: done,
        remaining: remaining,
        percent: safePercent(done, total),
        vibrant: palette.vibrant,
        pastel: palette.remaining,
        doneStart: palette.doneStart,
        doneEnd: palette.doneEnd,
        doneHoverStart: palette.doneHoverStart,
        doneHoverEnd: palette.doneHoverEnd,
        remainingStart: palette.remainingStart,
        remainingEnd: palette.remainingEnd
      };
    });
  }

  function buildTopicDataset(topicStats) {
    const labels = [];
    const data = [];
    const hoverOffsets = [];
    const segmentMeta = [];

    topicStats.forEach(function (topic) {
      labels.push(`${topic.shortLabel} Done`);
      data.push(topic.done);
      hoverOffsets.push(9);
      segmentMeta.push({ topicIndex: topic.topicIndex, state: 'Done' });

      labels.push(`${topic.shortLabel} Remaining`);
      data.push(topic.remaining);
      hoverOffsets.push(1);
      segmentMeta.push({ topicIndex: topic.topicIndex, state: 'Remaining' });
    });

    return { labels, data, hoverOffsets, segmentMeta };
  }

  function makeGradient(chart, start, end, fallback) {
    const area = chart.chartArea;
    if (!area) return fallback || end;
    const gradient = chart.ctx.createLinearGradient(area.left, area.top, area.right, area.bottom);
    gradient.addColorStop(0, start);
    gradient.addColorStop(1, end);
    return gradient;
  }

  function buildGradientColors(chart, topicStats, segmentMeta, isHover) {
    return segmentMeta.map(function (segment) {
      const topic = topicStats[segment.topicIndex];
      if (!topic) return isHover ? 'rgba(248, 250, 252, 0.85)' : 'rgba(100, 116, 139, 0.35)';

      if (segment.state === 'Done') {
        if (isHover) {
          return makeGradient(chart, topic.doneHoverStart, topic.doneHoverEnd, topic.vibrant);
        }
        return makeGradient(chart, topic.doneStart, topic.doneEnd, topic.vibrant);
      }

      return makeGradient(chart, topic.remainingStart, topic.remainingEnd, topic.pastel);
    });
  }

  function getTooltipTopic(chart, dataIndex) {
    const meta = chart.$segmentMeta && chart.$segmentMeta[dataIndex];
    if (!meta) return null;
    const stats = chart.$topicStats && chart.$topicStats[meta.topicIndex];
    if (!stats) return null;
    return {
      stats: stats,
      state: meta.state
    };
  }

  function init(app) {
    const charts = {};

    const progressCanvas = document.getElementById('progressChart');
    if (progressCanvas) {
      const ctxProgress = progressCanvas.getContext('2d');
      charts.progress = new Chart(ctxProgress, {
        type: 'doughnut',
        data: {
          labels: [],
          datasets: [{
            data: [],
            backgroundColor: [],
            hoverBackgroundColor: [],
            borderColor: 'rgba(248, 250, 252, 0.24)',
            borderWidth: 1,
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '75%',
          plugins: {
            centerText: {
              display: true,
              text: '0%',
              color: window.ThemePalette.text,
              font: '700 30px Inter'
            },
            legend: { display: false },
            tooltip: {
              callbacks: {
                title: function (context) {
                  if (!context || !context.length) return '';
                  const chart = context[0].chart;
                  const topicInfo = getTooltipTopic(chart, context[0].dataIndex);
                  return topicInfo ? topicInfo.stats.title : '';
                },
                label: function (context) {
                  const chart = context.chart;
                  const topicInfo = getTooltipTopic(chart, context.dataIndex);
                  if (!topicInfo) return '';
                  const value = context.parsed || 0;
                  const topicPercent = safePercent(value, topicInfo.stats.total);
                  return `${topicInfo.state}: ${value} (${topicPercent}%)`;
                },
                footer: function (context) {
                  if (!context || !context.length) return '';
                  const chart = context[0].chart;
                  const topicInfo = getTooltipTopic(chart, context[0].dataIndex);
                  if (!topicInfo) return '';
                  const stats = topicInfo.stats;
                  return `Topic progress: ${stats.done}/${stats.total} (${stats.percent}%)`;
                }
              }
            }
          }
        }
      });
    }

    update(app, charts);
    return charts;
  }

  function update(app, charts) {
    const targetCharts = charts || app.charts;
    if (!targetCharts) return;

    const counts = app.getCounts();
    const topicStats = getTopicStats(app.data);
    const dataset = buildTopicDataset(topicStats);

    if (targetCharts.progress) {
      const progressDataset = targetCharts.progress.data.datasets[0];
      targetCharts.progress.data.labels = dataset.labels;
      progressDataset.data = dataset.data;
      progressDataset.backgroundColor = buildGradientColors(targetCharts.progress, topicStats, dataset.segmentMeta, false);
      progressDataset.hoverBackgroundColor = buildGradientColors(targetCharts.progress, topicStats, dataset.segmentMeta, true);
      progressDataset.hoverOffset = dataset.hoverOffsets;
      progressDataset.borderColor = 'rgba(248, 250, 252, 0.24)';
      progressDataset.borderWidth = 1;
      targetCharts.progress.options.plugins.centerText.text = `${counts.percent}%`;
      targetCharts.progress.$topicStats = topicStats;
      targetCharts.progress.$segmentMeta = dataset.segmentMeta;
      targetCharts.progress.update();
    }
  }

  window.TrackerCharts = {
    init,
    update,
    getTopicStats
  };
})();

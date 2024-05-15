import React from 'react';
import { useWindowSize } from 'react-use';
import { useSelector } from 'umi';
import classNames from 'classnames';
import { omit } from 'lodash';
import { isNotEmptyArr } from 'cn-lib-for-4';
import ChartContainer from '@/common/components/ChartContainer';
import DrillDropMenu from '@/common/components/DrillDropMenu';
import { getChartIdsInCarousel } from '@/utils/chart-utils';
import { CHART_CAN_DRILL } from '@/common/globalOptions/chartConfig';

const ExternalContainer = ({ jumpParam }) => {
  const { dataScreenContent, dataScreenPanels, dataScreenInfo } = useSelector(
    ({ dataScreen }) => dataScreen.dataScreenEditor,
  );

  const panelDrillMap = useSelector(({ interaction }) => interaction.panelDrillMap);

  const { width, height } = useWindowSize();

  const backgroundStyle = dataScreenContent.backgroundImageInfo?.url
    ? {
        backgroundImage: `url('${dataScreenContent.backgroundImageInfo.url}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }
    : {
        background: `${dataScreenContent.backgroundColor || '#020126'}`,
      };

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          ...backgroundStyle,
          transform: `scale(${width / (dataScreenContent.width || 1920)}, ${height /
            (dataScreenContent.height || 1080)})`,
          transformOrigin: '0 0',
          width: dataScreenContent.width || 1920,
          height: dataScreenContent.height || 1080,
          transition: '0.5s',
        }}
      >
        {Object.values(omit(dataScreenPanels, getChartIdsInCarousel(dataScreenPanels))).map(
          panel => {
            const { id, layout, chart } = panel;
            const drills = (panelDrillMap || {})[id];
            if (jumpParam && Object.keys(jumpParam).length !== 0) {
              const { charts, fields, value } = jumpParam;
              if (charts.includes(id)) {
                fields.forEach(item => {
                  if (item.dataset === chart.datasetId) {
                    chart.jumpParam = {
                      field: item.field,
                      value,
                    };
                  }
                });
              }
              // 轮播组件需要拿着配置再传一层
              if (chart?.type === 'customize-carousel') {
                chart.jumpParam = jumpParam;
              }
            }
            return (
              <div
                key={id}
                className={classNames('out-panel', {
                  'panel-drill': CHART_CAN_DRILL.includes(chart?.type) && isNotEmptyArr(drills),
                })}
                style={{
                  width: layout.width,
                  height: layout.height,
                  left: layout.left,
                  top: layout.top,
                  zIndex: layout.zIndex,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    opacity: layout.opacity,
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      rotate: `${layout?.rotate || 0}deg`,
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                    }}
                  >
                    <ChartContainer
                      panelId={id}
                      chart={chart}
                      drills={drills}
                      layout={layout}
                      withTheme={false}
                      bgId={dataScreenInfo.bgId}
                      isPreviewOrShare
                    />
                  </div>

                  <DrillDropMenu panelId={id} drills={drills} />
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default ExternalContainer;

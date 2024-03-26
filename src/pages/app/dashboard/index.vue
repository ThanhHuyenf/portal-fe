<template>
  <MainContainer one-screen title="Trang chủ & Thống kê">
    <template v-slot:header-action>
      <el-button type="primary">Tạo báo cáo</el-button>
    </template>

    <el-row :gutter="15">
      <el-col :span="16">
        <el-card shadow="hover">
          <label class="font-semibold text-sm">Doanh thu tuần này</label>
            <v-chart class="chart" :option="optionRevenue" />
        </el-card>

        <el-card shadow="hover" class="mt-16">
          <div class="flex justify-between items-center">
            <div class="text-sm">
              <label class=" font-semibold text-xl leading-10">Tải xuống báo cáo thu nhập của bạn</label>
              <p class="text-gray-400">Tải xuống để có thông tin thống kê chi tiết từ Excel.</p>
            </div>
            <el-button size="large" type="primary">Tải về báo cáo</el-button>
          </div>

        </el-card>

      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <label class="font-semibold text-sm">Tỉ lệ hệ điều hành của người dùng</label>
          <v-chart class="chart-user" :option="optionProportionUsers" />
          <div class="sales_unit_footer flex justify-between p-10 mt-4 gap-6">
            <div class="single_sales">
              <p class="text-xs font-semibold">Doanh thu tháng này</p>
              <h3 class="text-2xl font-bold my-4">$57k</h3>
              <p class="flex items-center text-xs mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="#1ce929" d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"/></svg>
                <span class="ml-2 text-[#1ce929] mr-4">  14.5%</span>
                Thay đổi so với tháng trước</p>
            </div>
            <div class="single_sales disable_sales">
              <p class="text-xs font-semibold">Lợi nhuận tháng này</p>
              <h3 class="text-2xl font-bold my-4">$14k</h3>
              <p class="flex items-center text-xs mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="#1ce929" d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"/></svg>
                <span class="ml-2 text-[#1ce929] mr-4">  14.5%</span>
                Thay đổi so với tháng trước</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15" class="mt-20">
      <el-col :span="8">
        <el-card shadow="hover">
          <label class="font-semibold text-sm">Thống kê truy cập hàng tháng</label>
          <div class="py-10 h-120 mt-40">
            <v-chart class="h-80" :option="optionMonthlyAccess" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <label class="font-semibold text-sm">Bảng tóm tắt</label>

          <div class="wrapper mt-20">
            <p class="text-xs">25%</p>
            <div class="progress-bar">
              <span class="progress-bar-fill" style="width: 25%;"></span>
            </div>
          </div>

          <div class="wrapper-1 my-22">
            <p class="text-xs">75%</p>
            <div class="progress-bar-1">
              <span class="progress-bar-fill-1" style="width: 75%;"></span>
            </div>
          </div>
          <div class="wrapper-2 mb-24">
            <p class="text-xs">50%</p>
            <div class="progress-bar-2">
              <span class="progress-bar-fill-2" style="width: 50%;"></span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="min-h-[226px]">
          <label class="font-semibold text-sm">Tổng số đơn hàng</label>
          <div class="flex items-center justify-between mt-20">
            <h2 class="text-6xl">356</h2>
            <v-chart class="chart-order" :option="optionOrder" />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="15" class="mt-16">
      <el-col :span="8">
        <el-card shadow="hover">
          <label class="font-semibold text-sm mb-20">Các giao dịch gần nhất</label>
          <div class="user flex gap-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#64c5b1" d="M3 6v12h10.32a6.38 6.38 0 0 1-.32-2H7a2 2 0 0 0-2-2v-4c1.11 0 2-.89 2-2h10a2 2 0 0 0 2 2v.06c.67 0 1.34.12 2 .34V6zm9 3c-1.7.03-3 1.3-3 3s1.3 2.94 3 3c.38 0 .77-.08 1.14-.23c.27-1.1.72-2.14 1.83-3.16C14.85 10.28 13.59 8.97 12 9m7 2l2.25 2.25L19 15.5V14c-1.85 0-3.06 1.96-2.24 3.62l-1.09 1.09c-1.76-2.66.14-6.21 3.33-6.21zm0 11l-2.25-2.25L19 17.5V19c1.85 0 3.06-1.96 2.24-3.62l1.09-1.09c1.76 2.66-.14 6.21-3.33 6.21z"/></svg>
            <div class="w-3/4">
              <p class="font-bold">Người chơi 1</p>
              <p class="text-gray-500">10 Aug</p>
              <p class="text-gray-500">3PM</p>
            </div>
            <p class="text-[#64c5b1] font-bold w-[140px]">+ 500.000đ</p>
          </div>
          <div class="user flex gap-4 items-center border-b-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#64c5b1" d="M3 6v12h10.32a6.38 6.38 0 0 1-.32-2H7a2 2 0 0 0-2-2v-4c1.11 0 2-.89 2-2h10a2 2 0 0 0 2 2v.06c.67 0 1.34.12 2 .34V6zm9 3c-1.7.03-3 1.3-3 3s1.3 2.94 3 3c.38 0 .77-.08 1.14-.23c.27-1.1.72-2.14 1.83-3.16C14.85 10.28 13.59 8.97 12 9m7 2l2.25 2.25L19 15.5V14c-1.85 0-3.06 1.96-2.24 3.62l-1.09 1.09c-1.76-2.66.14-6.21 3.33-6.21zm0 11l-2.25-2.25L19 17.5V19c1.85 0 3.06-1.96 2.24-3.62l1.09-1.09c1.76 2.66-.14 6.21-3.33 6.21z"/></svg>
            <div class="w-3/4">
              <p class="font-bold">Người chơi 2</p>
              <p class="text-gray-500">10 Aug</p>
              <p class="text-gray-500">3PM</p>
            </div>
            <p class="text-[#64c5b1] font-bold w-[140px]">+ 500.000đ</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <label class="font-semibold text-sm">Tỉ lệ giao dịch trong tuần</label>
          <v-chart class="chart" :option="optionTransaction" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <label class="font-semibold text-sm">Thông tin thanh toán</label>
          <div class="h-50 flex justify-between items-center mt-20">
            <p class="font-semibold text-xs">Kế hoạch hàng tháng</p>
            <p class="text-[#b1b6c9] font-bold text-base">20.000.000 đ</p>
          </div>
          <div class="h-50 flex justify-between items-center">
            <p class="font-semibold text-xs">Thuế</p>
            <p class="text-[#b1b6c9] font-bold text-base">160.000 đ</p>
          </div>
          <div class="h-50 flex justify-between items-center">
            <p class="font-semibold text-xs">Phụ phí khác</p>
            <p class="text-[#b1b6c9] font-bold text-base">100.000.000 đ</p>
          </div>
          <p class="text-[#b1b6c9] font-bold text-xs">Dịch vụ livestream và lưu trữ</p>
          <div class="bg-blue-50 rounded-2 p-20">
            <p class="text-xs font-bold text-[#b1b6c9]">Số dư tài khoản</p>
            <h3 class="text-4xl font-bold text-[#64c5b1] text-center my-20">
              350.000.000 đ
            </h3>
            <p class="bg-[#d2eee7] px-8 py-6 w-fit text-[#64c5b1] text-xs font-bold rounded-1">+ 1.000 USDT</p>
            <div class="my-4">
              <el-button size="small" type="danger">Thanh toán ngay</el-button>
            </div>
            <el-button size="small" type="primary">Tự động thanh toán</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
<!--    <v-chart class="chart" :option="option" />-->
  </MainContainer>

</template>
<script lang="ts">
import {ref, defineComponent, onMounted} from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, BarChart, LineChart, RadarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  BarChart,
  LineChart,
  RadarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);
export default defineComponent({
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "light"
  },
  setup(){
    const option = ref({
      title: {
        text: "Traffic Sources",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
      },
      series: [
        {
          name: "Traffic Sources",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 335, name: "Direct" },
            { value: 310, name: "Email" },
            { value: 234, name: "Ad Networks" },
            { value: 135, name: "Video Ads" },
            { value: 1548, name: "Search Engines" }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });

    const optionRevenue = ref({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        showGrid: false,
        splitLine: {
          show: false
        },
      },
      yAxis: {
        type: 'value',
        splitLine: {
          // show: false,
          lineStyle: {
            width: '0.5'
          }
        },
      },
      series: [
        {
          data: [
            120,
            {
              value: 200,
              itemStyle: {
              }
            },
            150,
            80,
            70,
            110,
            130
          ],
          type: 'bar',
          barWidth: '10%',
          itemStyle: {
            borderRadius: 5,
            borderWidth: 1,
          }
        }
      ]
    });

    const optionMonthlyAccess=  ref({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        show: false
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [
        {
          name: 'Series 1',
          type: 'line',
          smooth: true,
          data: [10, 22, 1, 14, 10, 30, 10],
          showSymbol: false,
          lineStyle: {
            color: '#d4f9f3',
            width: 4,
            shadowBlur: 3,
            shadowColor: '#d4f9f3',
          }
        },
        {
          name: 'Series 2',
          type: 'line',
          smooth: true,
          data: [20, 12, 21, 34, 10, 30, 10],
          showSymbol: false,
          lineStyle: {
            color: '#64c5b1',
            width: 4,
            shadowBlur: 3,
            shadowColor: '#64c5b1'
          }
        },

      ]
    });

    const optionProportionUsers= ref({
      title: {
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        left: 'center',
        top: 'bottom',
        data: [
          'rose1',
          'rose2',
          'rose3',
          'rose4',
          'rose5',
        ]
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'Radius Mode',
          type: 'pie',
          radius: [20, 130],
          center: ['50%', '50%'],
          roseType: 'radius',
          itemStyle: {
            borderRadius: 5
          },
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: true
            }
          },
          data: [
            { value: 40, name: 'rose 1' },
            { value: 33, name: 'rose 2' },
            { value: 28, name: 'rose 3' },
            { value: 22, name: 'rose 4' },
            { value: 20, name: 'rose 5' },
          ]
        },
      ]
    })

    const optionOrder = ref({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        showGrid: false,
        splitLine: {
          show: false
        },
        show: false
      },
      yAxis: {
        type: 'value',
        splitLine: {
          // show: false,
          lineStyle: {
            width: '0.5'
          }
        },
        show: false
      },
      grid:{
        show: false,
        z: 0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        containLabel: false,
      },
      series: [
        {
          data: [
            {
              value: 120,
              itemStyle: {
                color: "#e4e9ec"
              }
            },
            {
              value: 150,
              itemStyle: {
                color: "#e4e9ec"
              }
            },
            {
              value: 200,
              itemStyle: {
                color: "#64c5b1"
              }
            },
            {
              value: 80,
              itemStyle: {
                color: "#e4e9ec"
              }
            },
            {
              value: 70,
              itemStyle: {
                color: "#e4e9ec"
              }
            },
          ],
          type: 'bar',
          barWidth: '10%',
          itemStyle: {
            borderRadius: 5,
            borderWidth: 1,
          }
        }
      ]
    });

    const optionTransaction = ref({
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'Mon', max: 6500 },
          { name: 'Tue', max: 16000 },
          { name: 'Wed', max: 30000 },
          { name: 'Thurs', max: 38000 },
          { name: 'Fri', max: 52000 },
          { name: 'Sun', max: 25000 },
          { name: 'Sat', max: 25000 }
        ]
      },
      series: [
        {
          type: 'radar',
          data: [
            {
              value: [4200, 6000, 20000, 35000, 15000, 18000, 2100],
              name: 'Allocated Budget',
              lineStyle: {
                color: "#64c5b1"
              }
            },

          ]
        }
      ]
    });
    return{
      option,
      optionRevenue,
      optionMonthlyAccess,
      optionProportionUsers,
      optionOrder,
      optionTransaction
    }
  }
})
</script>
<style scoped lang="scss">
.chart {
  height: 400px;
}
.chart-user {
  height: 320px;
  margin-top: 10px;
}
.chart-order {
  height: 120px;
  width: 60%;
}
.el-card{

}
.wrapper, .wrapper-1, .wrapper-2 {
  width: 100%;
}

.progress-bar, .progress-bar-1, .progress-bar-2 {
  width: 100%;
  background-color:#f8f9ff;
  border-radius: 10px;
}

.progress-bar-fill, .progress-bar-fill-1, .progress-bar-fill-2  {
  display: block;
  height: 8px;
  background-color: #ffbf44;
  border-radius: 10px;
  transition: width 500ms ease-in-out;
}
.progress-bar-fill-1 {
  background-color: #508ff4;
}
.progress-bar-fill-2 {
  background-color: #4be69d;
}
.sales_unit_footer{
 //background: #323246;
}
.user{
  margin-top: 10px;
  border-bottom: 1px solid #e4e9ec;
  padding-bottom: 10px;
}
</style>
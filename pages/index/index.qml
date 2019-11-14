<view class="index">
  <ladder></ladder>
  <head week="{{thisWeek}}" today="{{today}}"></head>
  <time-table>
    <proj-block qq:for="{{todayCourse}}" qq:key="{{index}}" dataArray="{{item}}"></proj-block>
  </time-table>
  <text class="bottom-title">作业提醒</text>
  <view class="index-bottom">

      <work-item></work-item>
      <work-item></work-item>
      <work-item></work-item>
   
  </view>
</view>

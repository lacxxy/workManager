<view class="index">
  <ladder></ladder>
  <head week="{{thisWeek}}" today="{{today}}" weather="{{weather}}"></head>
  <time-table nowIndex="{{today.index-1}}" course="{{course}}"> </time-table>
  <view class="bottom">
    <text class="bottom-title">作业提醒</text>
    <view class="index-bottom">
      <work-item qq:for="{{work}}" workData="{{item}}"></work-item>
      <text class="more" bindtap="more">加载更多</text>
    </view>
  </view>
</view>

<view class="index">
  <ladder></ladder>
  <head week="{{thisWeek}}" today="{{today}}" weather="{{weather}}"></head>
  <time-table nowIndex="{{today.index-1}}" course="{{course}}"> </time-table>

  <text class="bottom-title">作业提醒</text>

    <scroll-view scroll-y="true" class="index-bottom">
      <view class="bottom">
        <work-item qq:for="{{work}}" workData="{{item}}"></work-item>
        <loading qq:if="{{loading}}"></loading>
        <text class="more" bindtap="more" qq-else>加载更多</text>
      </view>
    </scroll-view>

</view>

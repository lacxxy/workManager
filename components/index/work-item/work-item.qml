<!--view class="work-item" style="height:{{myHeight}}px"-->
<view class="work-item" bindtap="routergo">
    <view class="attention"><text>待完成</text></view>
    <text class="title">{{title}}</text>
    <text class="proj">{{workData.theme}}</text>
    <view class="line"></view>
    <view class="bottom">
        <text class="time">截至提交时间  {{workData.endTime}}</text>
        <text class="time">距离提交还剩38天</text>
    </view>
</view>

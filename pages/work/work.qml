<view class="work">
    <headBar bind:all="allWork" bind:notDone="notDone" bind:done="done"></headBar>
    <scroll-view qq:if="{{work.length!=0}}" scroll-y="true" class="index-bottom">
    <view class="work-area">
        <item qq:for="{{work}}" work="{{item}}" qq:if="{{item.taskId}}"></item>
        <loading qq:if="{{loading}}"></loading>
        <text class="more" bindtap="more" qq-else>加载更多</text>
    </view>

    </scroll-view>

    <view qq:else class="dark">
        <image src="/assets/logo.jpg" class="logo"> </image>
        <text class="please">请添加作业</text>
    </view>
    <image src="/assets/blue-add.png" class="add" bindtap="routego"></image>
</view>

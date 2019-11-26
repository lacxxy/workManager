<view class="headBar">
    <view class="item" bindtap="all">
        <image src="/assets/done-select.png" qq:if="{{index==0}}" class="icon" mode="widthFix" ></image>
        <image src="/assets/ifdown.png" class="icon" mode="widthFix" qq-else></image>
        <text class="title">全部作业</text>
    </view>

    <view class="item" bindtap="notDone">
        <image src="/assets/done-select.png" qq:if="{{index==1}}" class="icon" mode="widthFix"></image>
        <image src="/assets/ifdown.png" class="icon" mode="widthFix" qq-else></image>
        <text class="title">待完成</text>
    </view>

    <view class="item" bindtap="done">
        <image src="/assets/done-select.png" qq:if="{{index==2}}" class="icon" mode="widthFix"></image>
        <image src="/assets/ifdown.png" class="icon" mode="widthFix" qq-else></image>
        <text class="title">已完成</text>
    </view>
</view>

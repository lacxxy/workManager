<view class="work">
    <headBar index="{{index}}" bind:all="allWork" bind:notDone="notDone" bind:done="done"></headBar>
    <swiper class="swp" bindchange="change" current="{{index}}" interval="{{interval}}" duration="700">
        <swiper-item class="index-bottom" qq:for="{{workArray}}" qq:for-item="item">
            <scroll-view qq:if="{{item.length!=0}}" bindscroll="test" scroll-y class="index-bottom">
                <view class="work-area">
                    <item qq:for="{{item}}" qq:for-item="item1" work="{{item1}}" qq:if="{{item1.taskId}}"></item>
                    <loading qq:if="{{loading}}"></loading>
                    <text class="more" bindtap="more" qq-else>加载更多</text>
                </view>
            </scroll-view>

            <view qq:else class="dark">
                <image src="/assets/logo.jpg" class="logo"> </image>
                <text class="please">请添加作业</text>
            </view>
        </swiper-item>
    </swiper>
    <image src="/assets/f5.png" class="f5" bindtap="f5"></image>
    <image src="/assets/blue-add.png" class="add" bindtap="routego"></image>
</view>

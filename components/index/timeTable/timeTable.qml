<view class="timeTable">
    <view class="white-block white-block1"></view>
    <view class="white-block white-block2"></view>
    <swiper class="swp" current="{{nowIndex}}" previous-margin="0rpx" indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
        <!--view class="white-block white-block3" qq:for="{{courseArray}}" qq:for-item="item1"-->
            <block qq:for="{{courseArray}}" qq:for-item="item1">
                <swiper-item class="white-block white-block3">
                    <proj-block qq:for="{{item1}}" qq:for-item="item2" qq:key="{{index2}}" dataArray="{{item2}}"></proj-block>
                </swiper-item>
            </block>
        <!--/view-->
    </swiper>
</view>

<view class="timeTable">
    <view class="white-block white-block1"></view>
    <view class="white-block white-block2"></view>
    <swiper indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
        <view class="white-block white-block3" qq:for="{{course}}">
            <swiper-item>
                <proj-block qq:for="{{course}}" qq:key="{{index}}" dataArray="{{item}}"></proj-block>
            </swiper-item>
        </view>
    </swiper>
</view>

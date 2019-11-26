<view class="timeTable">
    <swiper class="swp" current="{{nowIndex}}" indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
        <!--view class="white-block white-block3" qq:for="{{courseArray}}" qq:for-item="item1"-->

        <swiper-item class="white-block white-block3" qq:for="{{courseArray}}" qq:for-item="item1">
            <proj-block qq:for="{{item1}}" qq:for-item="item2" qq:key="{{index2}}" dataArray="{{item2}}"></proj-block>
        </swiper-item>

        <!--/view-->
    </swiper>
</view>

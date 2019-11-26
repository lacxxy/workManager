<view class="table">
    <picker bindchange="bindPickerChange" value="{{nowIndex}}" range="{{weekArray}}">
        <head num="{{nowIndex}}"></head>
    </picker>
    <swiper class="swp" bindchange="change" current="{{nowIndex}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
        <swiper-item class="swp-item" qq:for="{{course}}" qq:for-item="item">
            <view class="line1">
                <text style="font-size:80%;color:rgb(248,235,248);">{{nowIndex}}</text>
                <view class="item1">
                    <text>1</text>
                    <text>2</text>
                </view>
                <view class="item1">
                    <text>3</text>
                    <text>4</text>
                </view>
                <view class="item1">
                    <text>5</text>
                    <text>6</text>
                </view>
                <view class="item1">
                    <text>7</text>
                    <text>8</text>
                </view>
                <view class="item1">
                    <text>9</text>
                    <text>11</text>
                </view>
            </view>

            <view class="line" qq:for="{{item}}" qq:for-item="item1">
                <text style="font-size:80%">{{weekDay[index]}}</text>
                <view  style="background:{{item2.color}}" qq:if="{{item2.name!=undefined}}" qq:for="{{item1}}" class="item" qq:for-item="item2">
                    <text>{{item2.name}}</text>
                    <text>{{item2.place}}</text>
                </view>

                <view qq:else class="nullItem"> </view>
            </view>
        </swiper-item>
    </swiper>
</view>

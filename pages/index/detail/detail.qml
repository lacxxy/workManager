<view class="detail">
<view class="head">
        <text class="title">{{title}}</text><text class="time">{{time}}</text>
        <textarea maxlength="-1" class="content" value="{{content}}">
            
        </textarea>
        <text class="note">备注:{{note}}</text>
    </view>

    <view class="btn-area">
        <button class="btn edt-btn" bindtap="edt">修改</button>
        <button class="btn rmv-btn" bindtap="rmv">删除</button>
        <button class="btn done-btn" bindtap="done">标记已完成</button>
    </view>
</view>
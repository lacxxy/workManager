<view class="edit">
    <form report-submit="true" bindsubmit="save">
    <view class="head">
        <textarea maxlength="-1" class="content" bindinput ="contentInput" value="{{content}}"></textarea>
    </view>
    <text class="hint">(以上内容不准确？点击可手动编辑。换行表示两道题)</text>
    
    <picker value="{{index}}" bindchange="bindCourseChange" range="{{array}}">
        <view class="picker">
            <text class="title">课程</text>
            <text>{{array[index]}}</text>
        </view>
    </picker>
    <view qq:if="{{show}}">
       <input class="picker" value="{{selfCourse}}" bindinput ="courseInput" placeholder="请输入自定义课程" type="text"/>
    </view>
    <picker mode="date" value="{{date}}" bindchange="bindDateChange">
        <view class="picker">
            <text class="title">截止时间</text>
            <text>{{date}}</text>
        </view>
    </picker>
        <view class="picker">
            <text class="title">备注</text>
            <input type="text" bindinput ="noteInput" value="{{note}}" class="input"></input>
        </view>
  <button class="btn" bindtap="add">继续添加</button>
    <button form-type="submit" class="btn">保存</button>

    </form>
</view>

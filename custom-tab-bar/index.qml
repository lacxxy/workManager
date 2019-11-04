<cover-view class="tab-bar">
    <cover-view class="tab-bar-border"></cover-view>
    <cover-view class="tab-bar-item" data-path="{{list[0].pagePath}}"  bindtap="switchTab">
        <cover-image src="{{selected === 0 ? list[0].selectedIconPath : list[0].iconPath}}"></cover-image>
        <cover-view class="test0" style="color: {{selected == 0 ? selectedColor : color}}">{{list[0].text}}</cover-view>
    </cover-view>

    <cover-view class="tab-bar-mid tab-bar-item" data-path="{{list[1].pagePath}}" bindtap="switchTab">
        <cover-image src="{{selected === 1 ? list[1].selectedIconPath : list[1].iconPath}}"></cover-image>
    </cover-view>

    <cover-view class="tab-bar-item" data-path="{{list[2].pagePath}}" bindtap="switchTab">
        <cover-image src="{{selected === 2 ? list[2].selectedIconPath : list[2].iconPath}}"></cover-image>
        <cover-view class="test2" style="color: {{selected == 2 ? selectedColor : color}}">{{list[2].text}}</cover-view>
    </cover-view>
</cover-view>

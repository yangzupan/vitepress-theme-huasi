# 示例组件

这里展示一些 Markdown 组件在 Huasi 主题下的效果。

## 代码块

```javascript
function greet(name) {
  console.log(`Hello, ${name}! 🌸`)
}

greet('World')
```

```typescript
interface Flower {
  name: string
  color: string
  bloom(): void
}

class Sakura implements Flower {
  name = '樱花'
  color = '粉色'
  
  bloom() {
    console.log('樱花盛开了！🌸')
  }
}
```

## 表格

| 花名 | 颜色 | 季节 |
|------|------|------|
| 樱花 | 粉色 | 春天 |
| 玫瑰 | 红色 | 夏天 |
| 菊花 | 黄色 | 秋天 |
| 梅花 | 白色 | 冬天 |

## 引用

> "生活中从不缺少美，而是缺少发现美的眼睛。"
> 
> —— 罗丹

## 列表

### 无序列表

- 🌸 樱花
- 🌷 郁金香
- 🌹 玫瑰
- 🌻 向日葵

### 有序列表

1. 春天赏花
2. 夏天乘凉
3. 秋天品果
4. 冬天赏雪

## 警告提示

::: info
这是一条信息提示
:::

::: tip
这是一条提示
:::

::: warning
这是一条警告
:::

::: danger
这是一条危险提示
:::

## 详情

::: details 点击查看详情
这里是隐藏的内容，你可以点击展开查看。
:::

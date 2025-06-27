// 这里要进行的就是递归路由的实现
// 分为一下几步:
// 1.写一个处理函数
// 2.函数接收两个参数,一个是路由数据,一个是存放的数组
// 3.拿着数据,进去开始遍历,如果没有子集,那就....
// 4.如果有,就自己在调用自己

/**
 * #递归路由方法
 * 传入两个参数
 * @param RouterData {Object}  --this is 路由的树形数据
 * @param targetArray {Array} 我们自己创建的需要往里添加的home的children数组
 * */
export function initRouter(targetArray, RouterData,) {
// 数据处理

    RouterData.forEach(item => {
        // 编写模板
        const routerObj = {
            path: item.url, // 路由的路径
            name: item.name, // 路由的名称
            // 路由元信息
            meta: {
                breadcrumb: item.title
            },
            // 路由对应的组件
            component: () => import(`@/views/Home/${item.component}/index.vue`),
        }

        if (Array.isArray(item.children) && item.children.length > 0) {
            routerObj.children = [];
        }

        // ✅ 一定要先放进去，否则 parent.children 没法建立
        targetArray.push(routerObj);

        // 如果当前路由节点有子节点，递归调用 initRouter 处理子节点
        if (item.children) {
            routerObj.children = []
            initRouter(routerObj.children, item.children)
        }
    })
}
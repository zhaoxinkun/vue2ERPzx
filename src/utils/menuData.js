// 无限极递归左边菜单公共数据
// 无限极递归路由的数据

/**
 * @typedef {Object} MenuItem
 * @property {string} title - 菜单项的标题
 * @property {string} url - 菜单项的链接
 * @property {string} icon - 菜单项的图标类名
 * @property {string} name - 菜单项的唯一名称
 * @property {string} component - 组件名称或路径
 * @property {MenuItem[]} [children] - 子菜单项，若存在则为数组
 */

export default [
    {
        title: "企业首页",
        url: "/index",
        icon: "el-icon-menu",
        name: "index",
        component: "index",
        roles: ["input", "approve","administrator"]
    },
    {
        title: "审批类别",
        url: "/approvalApply",
        icon: "el-icon-coin",
        name: "approvalApply",
        component: "approvalApply",
        roles: ["input"],
        // 子数据
        children: [
            {
                title: "办公审批",
                url: "/approvalApply/officeApply",
                icon: "el-icon-shopping-bag-2",
                name: "officeApply",
                component: "approvalApply/officeApply"
            },

            {
                title: "差旅审批",
                url: "/approvalApply/travelApply",
                icon: "el-icon-s-promotion",
                name: "travelApply",
                component: "approvalApply/travelApply"
            },
            {
                title: "请假审批",
                url: "/approvalApply/leaveApply",
                icon: "el-icon-chat-dot-square",
                name: "leaveApply",
                component: "approvalApply/leaveApply"
            },
        ]
    },
    {
        title: "申请管理",
        url: "/approvalManage",
        icon: "el-icon-s-order",
        name: "approvalManage",
        component: "approvalManage",
        roles: ["input", "approve"],
        // 子数据
        children: [
            {
                title: "办公管理",
                url: "/approvalManage/officeManage",
                icon: "el-icon-shopping-bag-2",
                name: "officeManage",
                component: "approvalManage/officeManage"
            },

            {
                title: "差旅管理",
                url: "/approvalManage/travelManage",
                icon: "el-icon-s-promotion",
                name: "travelManage",
                component: "approvalManage/travelManage"
            },
            {
                title: "请假管理",
                url: "/approvalManage/leaveManage",
                icon: "el-icon-chat-dot-square",
                name: "leaveManage",
                component: "approvalManage/leaveManage"
            },
        ]
    },
    {
        title: "审批管理",
        url: "/approvalProcess",
        icon: "el-icon-s-order",
        name: "approvalProcess",
        component: "approvalProcess",
        roles: ["approve"],
        // 子数据
        children: [
            {
                title: "一审",
                url: "/approvalProcess/firstInstance",
                icon: "el-icon-shopping-bag-2",
                name: "firstInstance",
                component: "approvalProcess/firstInstance"
            },

            {
                title: "二审",
                url: "/approvalProcess/SecondInstance",
                icon: "el-icon-s-promotion",
                name: "secondInstance",
                component: "approvalProcess/secondInstance"
            },
            {
                title: "终审",
                url: "/approvalProcess/lastInstance",
                icon: "el-icon-chat-dot-square",
                name: "lastInstance",
                component: "approvalProcess/lastInstance"
            },
        ]
    },
    {
        title: "档案管理",
        url: "/fileManage",
        icon: "el-icon-upload",
        name: "fileManage",
        component: "fileManage",
        roles: ["approve"]
    },
    {
        title: "全局组件",
        url: "/globalCOM",
        icon: "el-icon-menu",
        name: "globalCOM",
        component: "globalCom",
        roles: ["approve"]
    },
    {
        title: "权限管理",
        url: "/powerManage",
        icon: "el-icon-menu",
        name: "powerManage",
        component: "powerManage",
        roles: ["approve", "administrator"],
        children: [
            {
                title: "创建员工审批员",
                url: "/powerManage/createUser",
                icon: "el-icon-circle-plus-outline",
                name: "createUser",
                component: "powerManage/createUser",
            },
            {
                title: "员工审批员列表",
                url: "/powerManage/userLists",
                icon: "el-icon-user",
                name: "userLists",
                component: "powerManage/userLists",
            },
            {
                title: "审批员权限",
                url: "/powerManage/modifyPower",
                icon: "el-icon-cpu",
                name: "modifyPower",
                component: "powerManage/modifyPower",
            }
        ]
    },

]

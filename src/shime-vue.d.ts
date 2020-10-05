// shims-vue.d.ts
//解决TS不识别Vue文件
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}

declare module '*.md' {
    const str:string
    export default str
}
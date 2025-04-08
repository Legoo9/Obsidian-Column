import { Plugin } from 'obsidian';

export default class ColumnsPlugin extends Plugin {
    async onload() {
        // 注册CSS样式
        this.registerMarkdownCodeBlockProcessor("columns", (source, el) => {
            const columns = source.split('---');
            const container = el.createDiv({ cls: 'column-container' });
            
            columns.forEach(colContent => {
                const column = container.createDiv({ cls: 'column' });
                // 使用Markdown渲染器解析内容
                this.app.markdownRenderer.render(colContent, column, '/', this);
            });
        });

        // 添加CSS文件
        this.addStyle('columns.css');
    }
}
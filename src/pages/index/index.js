import { getPage, meta, commonComponentProps } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/index.js";
import { Footer } from "../../widgets/footer/index.js";

export default () => {
    const { getCN } = { ...commonComponentProps };

    return getPage({
        title: "Главная",
        content: `
          ${Header()}
           <main class="${getCN("main")}">
                <div class="${getCN("container")}">
                    // Контент ...
                </div>               
            </main>    
          ${Footer()}
        `,
        meta: [
            meta({
                charset: "UTF-8"
            }),
            meta({
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            })
        ]
    })
}



export const effectHook = () => {
    const scrollToItem = (element: HTMLElement) => {
        if (element){
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    }

    document.addEventListener('keydown', (e) => {
        const item = document.querySelector(`[data-scroll="s-${e.key}"]`) as HTMLElement

        // @ts-ignore

        if (e?.target?.tagName === "INPUT") return
        if (item){

            scrollToItem(item)
        }
    })
}
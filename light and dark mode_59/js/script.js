function applyTheme(theme){
    document.body.classList.remove("theme-auto","them-light","theme-dark");
    document.body.classList.add(`theme-${theme}`);
}
document.addEventListener('DOMContentLoaded',()=>{
    const saveTheme=localStorage.getItem('theme')|| "auto";
    applyTheme(saveTheme)

    for(const opationElement of document.querySelectorAll('#selTheme option')){
        opationElement.selected=saveTheme===opationElement.value;
    }

    document.querySelector('#selTheme').addEventListener('change',function(){
        localStorage.setItem("theme",this.value);
        applyTheme(this.value)
    })
})
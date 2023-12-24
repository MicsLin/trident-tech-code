class NavBar {
    constructor() {
        this.siteName = '白頭翁不吃小米'
        this.links = [
            { name: '白頭翁的特性', url: '/feature' },
            { name: '白頭翁的故事', url: '/story' },
            { name: '白頭翁的美照', url: '/picture' },
            { name: '白頭翁的危機', url: '/crisis' }
        ]
        this.isOpendedMenuItems = false
    }
    click(){
        this.isOpendedMenuItems = !this.isOpendedMenuItems
        if(this.isOpendedMenuItems){
            document.body.style.overflow = 'hidden';
        }else{
            setTimeout(()=>{
                document.body.style.overflow = 'auto';
            },500)
        }
    }
    close(){
        this.isOpendedMenuItems = false
    }
}
export default NavBar
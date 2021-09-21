import { observable, action, decorate } from 'mobx'

class CartStore {

    list = [];

    handleAdd = (item) => {
        let num = 1
        if(item.num > 1){
            num = item.num + 1
        }

        const hasItemBefore = this.list.find(i=>i.id === item.id)
        // 新加入的项在最上面
        if(hasItemBefore){ // 之前存在
            this.list = this.list.map(i=>{
                if(i.id === item.id){
                    i.num ++
                }
                return i
            })
        }else{
            const target = {...item,num}
            this.list.push(target);
        }
    }

    // action
    handleDel(item) {
        this.list = this.list.filter(i => i.id !== item.id);
    }
}

decorate(CartStore, {
    list: observable,
    handleAdd: action,
    handleDel: action,
});

const cartStore = new CartStore()
export default cartStore;
import CommonService from './CommonService';

class EntityService extends CommonService {

        endpoint_crud = null;
        endpoint_select = null;
        endpoint_add_or_save = null;
        endpoint_delete = null;

        constructor(component, endpoint_select, endpoint_add_or_save, endpoint_delete){
            super(component);
              this.endpoint_select = endpoint_select;
              this.endpoint_add_or_save = endpoint_add_or_save;
              this.endpoint_delete = endpoint_delete;
        }
     
       loadItems = (url)=>{
        this.setLoading(true);
        fetch(url?url:this.endpoint_select)
                .then(response =>  response.json())
                .then(response => {
                  //console.log(response);
                  const firstElementKey = Object.keys(response._embedded)[0];
                  const data = response._embedded[firstElementKey];
                  //console.log(firstElementKey);
                  //console.log(data);
                  const state = this.component.state;
                  state.list = data;
                  state.page = response.page;
                  //console.log(state);
                  this.component.setState(state);
                  this.setLoading(false);
                })
                .catch((error) => {
                  //console.log(error);
                  this.setLoading(false);
                });
      }

      loadItem = (id)=>{
        this.setLoading(true);
        fetch(this.endpoint_select+"/"+id)
                .then(response =>  response.json())
                .then(response => {
                  const state = this.component.state;
                  state.target = response;
                  this.setLoading(false);
                  this.component.setState(state);
                })
                .catch((error) => {
                });
      }
      
      saveItem = (data, callback_url)=>{
        this.setLoading(true);
        fetch(this.endpoint_add_or_save, this.POST_HEADER(data))
                .then(response =>  response.json())
                .then(response => { 
                  if(data.id>0)
                    window.location.reload();
                  else
                   window.location.href=callback_url;
                  this.setLoading(false);
                })
                .catch((error) => {
                });
      }

      removeItem = (id)=>{
        this.setLoading(true);
        fetch(this.endpoint_delete+"/"+id, this.DELETE_HEADER())
                .then(response => { 
                  console.log(response);
                  console.log('here');
                    this.loadItems();
                })
                .catch((error) => {
                });
      }
}
 
  
  export default EntityService;
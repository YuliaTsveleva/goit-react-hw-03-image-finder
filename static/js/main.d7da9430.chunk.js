(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__FkS4G",SearchForm:"Searchbar_SearchForm__3NDLZ",SearchFormButton:"Searchbar_SearchFormButton__1U6T5",SearchFormInput:"Searchbar_SearchFormInput__jjmYc"}},,,,function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3GSCy",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__kRqVt"}},function(e,t,a){e.exports={Loading:"Loader_Loading__16FFU",IconSpinner:"Loader_IconSpinner__34Yy0",spinner:"Loader_spinner__1Odbj"}},,,function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2o-fz"}},function(e,t,a){e.exports={Button:"Button_Button__2QZaI"}},function(e,t,a){e.exports={ErrorView:"ErrorView_ErrorView__1suMQ"}},,function(e,t,a){e.exports={RequestOffer:"PreView_RequestOffer__279c7"}},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(8),o=a.n(c),s=(a(24),a(3)),i=a(4),m=a(6),u=a(5),l=(a(25),a(7)),h=a.n(l),g=a(14),p=a(9),j=(a(13),a(2)),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.imageName.trim())return p.b.error("Enter your request please!");e.props.onSubmit(e.state.imageName),e.setState({imageName:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:h.a.Searchbar,children:Object(j.jsxs)("form",{className:h.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:h.a.SearchFormButton,children:Object(j.jsx)("span",{className:h.a.SearchFormButtonLabel,children:Object(j.jsx)(g.a,{size:30})})}),Object(j.jsx)("input",{className:h.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.imageName,onChange:this.handleNameChange})]})})}}]),a}(r.Component),f=b,d=a(15),O=a.n(d),_=a(11),S=a.n(_);var I=function(e){var t=e.src,a=e.alt;return Object(j.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(j.jsx)("img",{src:t,alt:a,className:S.a.ImageGalleryItemImage})})},x=a(16),y=a.n(x);var v=function(e){var t=e.loadMore;return Object(j.jsx)("button",{onClick:t,type:"button",className:y.a.Button,children:"Load more"})},N=a(17),w=a.n(N);function F(e){var t=e.message;return Object(j.jsx)("p",{className:w.a.ErrorView,children:t})}var L=a(12),G=a.n(L),k=a(18);function C(){return Object(j.jsx)("p",{className:G.a.Loading,children:Object(j.jsx)(k.a,{size:"100",className:G.a.IconSpinner})})}var B=a(19),R=a.n(B);function E(){return Object(j.jsx)("p",{className:R.a.RequestOffer,children:"Enter your request..."})}var U=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={images:[],page:1,error:null,status:"idle"},e.toSetPage=function(){e.setState((function(t){if(e.state.images.length>1)return{page:t.page+1}}))},e.loadMore=function(){e.toSetPage(),e.fetchImages()},e.fetchImages=function(){var t=e.props.imageName,a=e.state.page;setTimeout((function(){fetch("https://pixabay.com/api/?q=".concat(t,"&page=1&key=24048830-4cc4486dcdd2cd17ebea2a9c8&image_type=photo&orientation=horizontal&page=",1,"&per_page=").concat(12*a)).then((function(e){return e.ok?e.json():Promise.reject(new Error("No image with this name ".concat(t)))})).then((function(e){return e.hits})).then((function(t){var a=t.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}}));e.setState({images:a,status:"resolved"})})).catch((function(t){return e.setState({error:t,status:"rejected"})}))}),1e3)},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.imageName!==this.props.imageName&&this.setState({status:"pending",page:1,images:[]}),this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,r=e.status;return"idle"===r?Object(j.jsx)(E,{}):"pending"===r?Object(j.jsx)(C,{}):"rejected"===r?Object(j.jsx)(F,{message:a.message}):"resolved"===r?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:O.a.ImageGallery,children:t&&t.map((function(e){return Object(j.jsx)(I,{src:e.webformatURL,alt:e.tags},e.id)}))}),t.length>0&&Object(j.jsx)(v,{loadMore:this.loadMore})]}):void 0}}]),a}(r.Component),q=U,M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={imageName:""},e.handleFormSubmit=function(t){e.setState({imageName:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{onSubmit:this.handleFormSubmit}),Object(j.jsx)(q,{imageName:this.state.imageName}),Object(j.jsx)(p.a,{autoClose:"3000",position:"top-left",theme:"colored"})]})}}]),a}(r.Component),V=M;o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.d7da9430.chunk.js.map
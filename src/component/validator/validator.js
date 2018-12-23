import toastr from "toastr";
import '../../../node_modules/toastr/build/toastr.css'

class Validator {
    static setupToastr_=function(){
    toastr.options.closeButton = true;
    toastr.options.closeMethod = 'fadeOut';
    toastr.options.closeDuration = 300;
    toastr.options.closeEasing = 'swing';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
    toastr.options.showMethod = 'slideDown';
    toastr.options.hideMethod = 'slideUp';
    toastr.options.closeMethod = 'slideUp';
    }
    static showError=function(coomponentId,message){
        this.setupToastr_();
        var coomponent = document.getElementById(coomponentId);
        toastr.error(coomponentId+":"+message);
    };
    static remove=function(){
        toastr.remove();
    }
}
export default Validator
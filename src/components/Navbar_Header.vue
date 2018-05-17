<template>
<nav class="navbar navbar-fixed-top my-navbar" role="navigation">
    <div class="container-fluid">
        <div class="row">      
            <div class="navbar-header col-md-4 col-sm-4 col-xs-4">
                <!-- <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="#navbar-collapse">
                    <span class="sr-only">切换导航</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button> -->
                <a class="navbar-brand" href="#" >爱购物</a>
            </div>        
            <div class="navbar-collapse col-md-4 col-sm-4 col-xs-4" id="navbar-collapse">
                <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" :placeholder="msg" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar_Header',
  data () {
    return {
      msg: 'Search'
    }
  }
}
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {$(".navbar-fixed-top").addClass("top-nav");
    }else {$(".navbar-fixed-top").removeClass("top-nav");}
})
</script>

<style scoped>
.my-navbar {
    transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
}
.my-navbar a{
    background: transparent !important;
    color: #fff !important
}
.my-navbar a:hover {
    color: #45bcf9 !important;
    background: transparent;
    outline: 0
}
.top-nav {
    padding: 0;
    background: #000;
}
.navbar-collapse {
    margin: auto;
    padding: 0;
    border: 0;
}
.navbar-form {
    border: 0;
    margin: 0;
}
/*button.navbar-toggle {
    background-color: #fbfbfb;
}
button.navbar-toggle > span.icon-bar {
    background-color: #dedede
} */
</style>

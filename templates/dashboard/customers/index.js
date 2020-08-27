const openDrawer = ()=>{
    $(()=>{
        $('.drawer-modal').show();
        $('.drawer').show('slide')
    })
}

$(()=>{
    $('.drawer-modal').click((e)=>{
        if(e.target.className==='drawer-modal'){
            $('.drawer').hide('slide',()=>{
                $('.drawer-modal').hide();
            });
        }
    });
    $(document).keydown((e)=> {
        if(e.key ==="Escape"){
            $('.drawer').hide('slide',()=>{
                $('.drawer-modal').hide();
            });
        }
      });

      $('#dashboard').click((e)=>{
        if(e.target.id==='dashboard'||e.target.tagName==='I'){
            $("#dashboardSub").slideToggle(300)
            if($("#dashboard").children('I')[0].className==='fas fa-chevron-up')
            $("#dashboard").children('I')[0].className = 'fas fa-chevron-down'
            else
            $("#dashboard").children('I')[0].className = 'fas fa-chevron-up'
        }
    })
})


# 在docsify中使用Vuep

<vuep template="#example"></vuep>
<script v-pre type="text/x-template" id="example">
<template>
    <div id="templete">
        Hello,{{name}}!
    </div>
</template>
<style>
    #template{
        width: 100%;
        padding: 60px 29px;
        display:flex;
    }
</style>

<script>
module.exports =  {
    data: function () {
        return {
            name: "vuep"
        }
    }
}
</script>
</script>
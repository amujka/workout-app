<template>
  <button v-if="screen === 'mobile'" @click="openNav = !openNav">click</button>

        <Transition name="slide">
            <ul v-if="openNav" class="nav " :class="screen">
                <li><router-link to="/" >Home</router-link></li>
                <li><router-link to="/" >Exercises</router-link></li>
                <li><router-link to="/" >About</router-link></li>
                <li><router-link to="/" >Services</router-link></li>
            </ul>
        </Transition>
</template>

<script>
export default {
    name:"header-nav",
    props: ['screen','show'],
    data () {
        return {
           
openNav:false
        }
    }

}
</script>

<style lang="scss" scoped>
.nav {
    display: flex;

    li {
        width: 100%;        
        margin: 2rem  0;

        @media screen and (min-width: 768px) {
            margin: 0px 10px;
        }   

        a {                
            color: #eee;
            font-size: 1.5rem;
            
            @media screen and (min-width: 768px) {
                font-size: 1.1rem;
            }           
        }
    }
}


.desktop {  
    flex-direction: row;
}

.mobile {
    position: absolute;
    top: 77px;
    left: 0%;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: calc(100vh - 77px);
    width: 100%;
    background-color: #42b983;
}
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease-out;
}

.slide-enter-from {
    left: -100%;
}
.slide-enter-to {
    left: 0%;
}
.slide-leave-to {
    left: -100%;
}

</style>
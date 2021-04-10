<template>
    <ion-page>
        <div class="mt-2">
            <h2 class="text-center text-2xl font-semibold">
                NewTask
            </h2>
        </div>

        <ion-fab vertical="top" horizontal="end" slot="fixed"
        class="cursor-pointer" @click="$emit('close-modal')">
            <ion-icon :icon="close" class="text-3xl"></ion-icon>
        </ion-fab>
    </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonFab, IonIcon } from '@ionic/vue'
import { close } from 'ionicons/icons'

export default defineComponent  ({
    components:{
        IonPage, IonFab, IonIcon
    },
    setup(){
        return { close }
    }
})
</script>

<style>

</style>
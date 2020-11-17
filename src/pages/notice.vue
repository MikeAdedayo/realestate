<template>
  <div style="width:100%;margin-bottom:15px" class="q-pa-md flex flex-center">
<div style="height:15vh;width:100%;color:#acd"></div>
      <q-page-container>
                 <q-page >
                            <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
                 <q-page-sticky expand position="top" :offset="[18, 25]" >
                                <q-toolbar style="background-color:#abc;width:75%" class="text-white">
              <q-avatar>
                <q-icon name="notice"/>
              </q-avatar>
              <q-toolbar-title>
                Notifications
              </q-toolbar-title>
            </q-toolbar>
                              </q-page-sticky>
        </q-page>
      </q-page-container>
     </div>
</template>

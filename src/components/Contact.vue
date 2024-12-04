<template>
  <v-theme-provider theme="dark">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-icon left>mdi-map-marker</v-icon> Valby, CPH<br />
          <v-icon left>mdi-phone</v-icon> Phone: +45 15151515<br />
          <v-icon left>mdi-email</v-icon> Email: cat@hotmail.com<br />
        </v-col>
        <v-col cols="12" md="6">
          <v-form>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="Name" required name="Name"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Email" required name="Email"></v-text-field>
              </v-col>
            </v-row>
            <v-textarea label="Message" required name="Message"></v-textarea>
            <v-btn color="black" class="mt-4" type="submit">SEND</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>

<script lang="ts" setup></script>

<style scoped></style>

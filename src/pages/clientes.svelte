<Page name="clientes">
  <Navbar title="Clientes" backLink="Back"></Navbar>

  <!-- <BlockTitle>Form Example</BlockTitle> -->
  <List noHairLines>
  {#each clients as client}
    <ListItem link="#" title="{client.nombre} {client.contacto}">
      <i slot="media" class="icon demo-list-icon" />
    </ListItem>
    
    {/each}
  </List>

</Page>
<script>
  import {
    Page,
    Navbar,
    List,
    ListInput,
    ListItem,
    Toggle,
    BlockTitle,
    Row,
    Button,
    Range,
    Block
  } from 'framework7-svelte';
  export let f7route;

  const clients = f7route.context.clients;
</script>

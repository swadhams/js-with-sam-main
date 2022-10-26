
<script>

let searchTerm = ''

const albums = [
        { title: "In The Aeroplane Over The Sea", artist:"Neutral Milk Hotel", image: '/ITAOTS.jpg',},
        { title: "Hounds of Love", artist: "Kate Bush", image:'/Katebushhoundsoflove.png'},
        { title: "Rain Dogs", artist: "Tom Waits", image:'/Tom_Waits_-_Rain_Dogs.png'},
        { title: "Deathconsciousness", artist: "Have A Nice Life", image: '/dc.jpg'},
        { title: "Static Age", artist: "Misfits", image:'/Misfits_-_Static_Age_cover.jpg' },
        { title: "Hospice", artist: "The Antlers", image:'/Hospicecover.jpg' },
        { title: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West", image:'/MBDTF_ALT.jpg' },
        { title: "November Coming Fire", artist: "Samhian", image:'/Samhain_NovComFire.jpg' },
        { title: "Deep Cuts", artist: "The Knife", image:'/The_Knife_-_Deep_Cuts.png' },
    ];
 
let filtered_list = [ ...albums ];

$: {
    if (searchTerm || !searchTerm) {
         filtered_list = [ ...albums ];
         filtered_list = filtered_list.filter(album => {
            if (album.title.toLowerCase().includes(searchTerm.toLowerCase()) || album.artist.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return true ;
                }
         });
    }
 }
</script>

<main>
    <input type="text" bind:value={searchTerm} />
     {#each filtered_list as { title, artist, image}}
     <tr>
    <td><img src={image} class="picture" alt="An album cover"/></td>
    <td>{title}</td>
    <td>{artist}</td>
     </tr>
    {/each}     
    
        
</main>

<style>
    .picture {
        height: 100px;
        width: 100px;
    }
    tr {
        border: solid;
    }
    td {
        border: solid;
    }
    
</style>

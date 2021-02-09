<template>
    <div id="Elements">
        <section class="hero">
            <!-- <div class="container">
                <div class="hero__image"></div>
                <div class="hero__text container--pall">
                    <h1>
                        Meet {{ data.person.name }}
                    </h1>
                    <p>{{ data.person.summaryOfBio }}
                    </p>
                    <div class="social_media" v-if="data.person.links != null">
                        <h3>Follow on:</h3>
                        <div class="social_media_count" v-for="(persons, index) in data.person.links" :key = "index">
                            <a :href="data.person.links[index].address" class="button">{{data.person.links[0].name}}</a>
                        </div>
                    </div>  
                </div>
            </div> -->
        </section>
    </div>
</template>

<script>

export default {
}
</script>
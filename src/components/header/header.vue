<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#">VueStart</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <router-link tag="li" :to="route.path" v-for="route in routes">
                    <a class="nav-link">{{ route.name }}</a>
                </router-link>
                <li class="nav-item">
                    <a class="nav-link" href="#" v-on:click="logout">logout</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

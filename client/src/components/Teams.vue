<template>
<div>
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <h5>Season:</h5>
        <v-select :items="seasons" label="Select Season">
        </v-select>
      </v-flex>
      <v-flex xs12 sm6 d-flex>
        <h5>Team:</h5>
        <v-select :items="teams" label="Select Team">
        </v-select>
      </v-flex>
      <v-flex xs12 sm12 d-flex>
        <div v-if="teams.teams.length > 0">
          <v-data-table :headers="teams.header" :items="teamStats.teams" hide-actions class="elevation-1">
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.stats.gamesPlayed }}</td>
              <td class="text-xs-right">{{ props.item.standings.wins }}</td>
              <td class="text-xs-right">{{ props.item.standings.losses }}</td>
              <td class="text-xs-right">{{ props.item.standings.winPct }}</td>
            </template>
          </v-data-table>
        </div>
        <div v-else><p>No TEAMS!</p></div>
      </v-flex>
    </v-layout>
  </v-container>
  <ul v-for="standing in standings" :key="standing.id">
    <li>{{standing.name}}</li>
  </ul>

  <button @click="getStandings">Hmm!</button>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from "vuex";
export default {
  data() {
    return {
        header: [{
            text: "Team",
            align: "left",
            sortable: false,
            value: "name"
          },
          {
            text: "Rank",
            value: "rank"
          },
          {
            text: "Win",
            value: "wins"
          },
          {
            text: "Loss",
            value: "losses"
          },
          {
            text: "Win Percentage",
            value: "winpct"
          }
        ],
        teamStats: {teams: [],},
      season: "",
      seasons: {
        "2018 - 2019": "2018 - 2019",
        "2017 - 2018": "2017 - 2018",
        "2016 - 2017": "2016 - 2017",
        "2015 - 2016": "2015 - 2016"
      }
    };
  },
  computed: {
    ...mapState("games", {
      standings: state => state.standings
    })
  },
  methods: {
    ...mapActions("teams", ["getStandings", "getTeams"])
  },
  created() {
    getStandings();
    getTeams();
  }
};
</script>

<style scoped>
</style>

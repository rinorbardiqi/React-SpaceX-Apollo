import {gql} from "@apollo/client";
export const GET_SPACE_MISSIONS = gql`
query listLaunches($limit:Int!,$offset:Int!){
  launchesPast(limit:$limit,offset:$offset) {
    links {
      wikipedia
      video_link
    }
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          core {
            status
          }
          flight
        }
      }
    }
    ships {
      name
      home_port
      image
    }
    id
    launch_year
  }
}`;
export const GET_MISSION = gql`
query getMission($id:ID!){
  launch(id:$id){
    links {
      wikipedia
      video_link
    }
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          core {
            status
          }
          flight
        }
      }
    }
    ships {
      name
      home_port
      image
    }
    id
    launch_year
  }
}

`


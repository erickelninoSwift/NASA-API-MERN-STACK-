import { useCallback, useEffect, useState } from "react";

import { httpGetPlanets } from "./requests";

function usePlanets() {
  const [planets, savePlanets] = useState([]);

  const getPlanets = useCallback(async () => {
    const { data } = await httpGetPlanets();
    if (data.length > 0) {
      savePlanets(data);
    }
  }, []);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return planets;
}

export default usePlanets;

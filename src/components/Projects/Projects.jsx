import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

const Projects = () => {
  // $(function () {
  //   $(document).tooltip();
  // });

  useEffect(() => {
    $(function () {
      $("#datepicker").datepicker();
    });
  }, []);

  return (
    <>
      <p>
        Date: <input type="text" id="datepicker" />
      </p>
    </>
  );
};

export default Projects;

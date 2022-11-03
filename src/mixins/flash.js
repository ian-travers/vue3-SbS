import swal from "sweetalert";

export default {
  methods: {
    flash(text) {
      return swal("Success", text, "success");
    },
  },
};

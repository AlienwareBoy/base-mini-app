Page({
  data: {

  },
  onLoad() {

  },
  open_popup() {
    this.popup_bottom = this.selectComponent('#popup-bottom');
    this.popup_bottom.openPopup()
  },
  close_popup() {
    this.popup_bottom = this.selectComponent('#popup-bottom');
    this.popup_bottom.closePopup()
  }
})
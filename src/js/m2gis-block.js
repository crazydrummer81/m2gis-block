const icons = {
	whastapp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>`,
	fb: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><desc>Facebook</desc><path d="M21.1 7.8C22.5 6.5 24.5 6 26.4 6h6v6.3h-3.9c-.8-.1-1.6.6-1.8 1.4v4.2h5.7c-.1 2-.4 4.1-.7 6.1h-5v18h-7.4V24h-3.6v-6h3.6v-5.9c.1-1.7.7-3.3 1.8-4.3z"></path></svg>`,
	twitter: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><desc>Twitter</desc><path d="M41.8 12.7c-1.3.6-2.8 1-4.2 1.1 1.5-1 2.6-2.3 3.2-4-1.5.8-2.9 1.5-4.7 1.8-1.3-1.5-3.2-2.3-5.3-2.3-4 0-7.3 3.2-7.3 7.3 0 .6 0 1.1.2 1.6-6-.3-11.3-3.2-15.1-7.6-.6 1.1-1 2.3-1 3.7 0 2.6 1.3 4.7 3.2 6-1.1 0-2.3-.3-3.2-1v.2c0 3.6 2.4 6.5 5.8 7.1-.6.2-1.3.3-1.9.3-.5 0-1 0-1.3-.2 1 2.9 3.6 5 6.8 5-2.4 1.9-5.7 3.1-9.1 3.1-.6 0-1.1 0-1.8-.2 3.2 2.1 7 3.2 11.2 3.2 13.4 0 20.7-11 20.7-20.7v-1c1.7-.7 2.8-2 3.8-3.4z"></path></svg>`,
	vk: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><desc>VK</desc><path d="M41.2 22.2c.6-.8 1.1-1.5 1.5-2 2.7-3.5 3.8-5.8 3.5-6.8l-.2-.2c-.1-.1-.3-.3-.7-.4-.4-.1-.9-.1-1.5-.1h-7.2c-.2 0-.3 0-.3.1 0 0-.1 0-.1.1v.1c-.1 0-.2.1-.3.2-.1.1-.2.2-.2.4-.7 1.9-1.5 3.6-2.5 5.2-.6 1-1.1 1.8-1.6 2.5s-.9 1.2-1.2 1.5c-.3.3-.6.6-.9.8-.2.3-.4.4-.5.4-.1 0-.3-.1-.4-.1-.2-.1-.4-.3-.5-.6-.1-.2-.2-.5-.3-.9 0-.4-.1-.7-.1-.9v-1.1-1-1.9c0-.7 0-1.2.1-1.6v-1.3c0-.4 0-.8-.1-1.1-.1-.3-.1-.5-.2-.7-.1-.2-.3-.4-.5-.6-.2-.1-.5-.2-.8-.3-.8-.2-1.9-.3-3.1-.3-2.9 0-4.7.2-5.5.6-.3.2-.6.4-.9.7-.3.3-.3.5-.1.6.9.1 1.6.5 2 1l.1.3c.1.2.2.6.3 1.1.1.5.2 1.1.2 1.7.1 1.1.1 2.1 0 2.9-.1.8-.1 1.4-.2 1.9-.1.4-.2.8-.3 1.1-.1.3-.2.4-.3.5 0 .1-.1.1-.1.1-.1-.1-.4-.1-.6-.1-.2 0-.5-.1-.8-.3-.3-.2-.6-.5-1-.9-.3-.4-.7-.9-1.1-1.6-.4-.7-.8-1.5-1.3-2.4l-.4-.7c-.2-.4-.5-1.1-.9-1.9-.4-.8-.8-1.6-1.1-2.4-.1-.3-.3-.6-.6-.7l-.1-.1c-.1-.1-.2-.1-.4-.2s-.3-.1-.5-.2H3.2c-.6 0-1.1.1-1.3.4l-.1.1c0 .1-.1.2-.1.4s0 .4.1.6c.9 2.2 1.9 4.3 3 6.3s2 3.6 2.8 4.9c.8 1.2 1.6 2.4 2.4 3.5.8 1.1 1.4 1.8 1.7 2.1.3.3.5.5.6.7l.6.6c.4.4.9.8 1.6 1.3.7.5 1.5 1 2.4 1.5.9.5 1.9.9 3 1.2 1.2.3 2.3.4 3.4.4H26c.5 0 .9-.2 1.2-.5l.1-.1c.1-.1.1-.2.2-.4s.1-.4.1-.6c0-.7 0-1.3.1-1.8s.2-.9.4-1.2c.1-.3.3-.5.5-.7.2-.2.3-.3.4-.3.1 0 .1-.1.2-.1.4-.1.8 0 1.3.4s1 .8 1.4 1.3c.4.5 1 1.1 1.6 1.8.6.7 1.2 1.2 1.6 1.5l.5.3c.3.2.7.4 1.2.5.5.2.9.2 1.3.1l5.9-.1c.6 0 1-.1 1.4-.3.3-.2.5-.4.6-.6.1-.2.1-.5 0-.8-.1-.3-.1-.5-.2-.6-.1-.1-.1-.2-.2-.3-.8-1.4-2.2-3.1-4.4-5.1-1-.9-1.6-1.6-1.9-1.9-.5-.6-.6-1.2-.3-1.9.3-.5 1-1.5 2.2-3z"></path></svg>`,
	ok: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 25 25" enable-background="new 0 0 25 25" xml:space="preserve"><desc>Odnoklassniki</desc><path d="M12.498,6.2c-1.064,0.001-1.927,0.864-1.929,1.93c0,1.064,0.865,1.93,1.929,1.93c1.067-0.002,1.931-0.865,1.932-1.93C14.43,7.064,13.565,6.201,12.498,6.2L12.498,6.2z M12.498,12.792c-2.571-0.004-4.657-2.089-4.66-4.662c0.002-2.575,2.086-4.66,4.66-4.663c2.575,0.002,4.663,2.088,4.664,4.663C17.16,10.703,15.073,12.788,12.498,12.792L12.498,12.792z M10.614,16.593c-0.959-0.218-1.876-0.598-2.708-1.12c-0.639-0.401-0.831-1.246-0.43-1.884c0.402-0.639,1.247-0.831,1.885-0.428c1.919,1.199,4.357,1.199,6.276,0c0.414-0.261,0.936-0.281,1.367-0.053c0.432,0.227,0.709,0.669,0.727,1.157c0.018,0.487-0.224,0.947-0.638,1.207c-0.832,0.522-1.749,0.9-2.707,1.12l2.606,2.608c0.533,0.534,0.532,1.398-0.002,1.934c-0.535,0.531-1.397,0.531-1.931-0.003L12.5,18.569l-2.561,2.562c-0.534,0.534-1.399,0.534-1.934,0c-0.531-0.534-0.531-1.399,0-1.934L10.614,16.593L10.614,16.593z"></path></svg>`,
	behace: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 25 25" enable-background="new 0 0 25 25" xml:space="preserve"><desc>Behance</desc><path d="M22.4,7.5h-5.6V6.1h5.6L22.4,7.5L22.4,7.5z M13.1,13.2c0.4,0.6,0.5,1.2,0.5,2c0,0.8-0.2,1.6-0.6,2.2	c-0.3,0.4-0.6,0.8-1,1.1c-0.4,0.3-1,0.6-1.6,0.7c-0.6,0.1-1.3,0.2-2,0.2H2.3V5.6H9c1.7,0,2.9,0.5,3.6,1.5c0.4,0.6,0.6,1.3,0.6,2.1	c0,0.8-0.2,1.5-0.6,2c-0.2,0.3-0.6,0.6-1.1,0.8C12.2,12.2,12.7,12.7,13.1,13.2z M5.5,11h2.9c0.6,0,1.1-0.1,1.5-0.3	c0.4-0.2,0.6-0.6,0.6-1.2c0-0.6-0.2-1.1-0.7-1.3C9.3,8.1,8.7,8,8.1,8H5.5V11z M10.7,15c0-0.7-0.3-1.2-0.9-1.5	c-0.3-0.2-0.8-0.2-1.4-0.2h-3V17h2.9c0.6,0,1.1-0.1,1.4-0.2C10.4,16.5,10.7,15.9,10.7,15z M24.5,12.8c0.1,0.5,0.1,1.1,0.1,2h-7.2	c0,1,0.4,1.7,1,2.1c0.4,0.3,0.9,0.4,1.4,0.4c0.6,0,1.1-0.1,1.4-0.5c0.2-0.2,0.4-0.4,0.5-0.7h2.6c-0.1,0.6-0.4,1.2-1,1.8	c-0.9,1-2.1,1.4-3.7,1.4c-1.3,0-2.5-0.4-3.5-1.2c-1-0.8-1.5-2.1-1.5-4c0-1.7,0.5-3,1.4-4c0.9-0.9,2.1-1.4,3.5-1.4	c0.9,0,1.6,0.2,2.3,0.5c0.7,0.3,1.3,0.8,1.7,1.5C24.1,11.3,24.3,12,24.5,12.8z M21.8,13c0-0.7-0.3-1.2-0.7-1.6	c-0.4-0.4-0.9-0.5-1.5-0.5c-0.7,0-1.2,0.2-1.5,0.6c-0.4,0.4-0.6,0.9-0.7,1.5L21.8,13L21.8,13z"></path></svg>`,
	vimeo: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48" enable-background="new -455 257 48 48" xml:space="preserve"><desc>Vimeo</desc><path d="M2.9 16.5l1.6 2s3.2-2.5 4.3-1.3c1.1 1.3 5.2 16.5 6.5 19.3 1.2 2.5 4.5 5.7 8.1 3.4S39 27.4 41.1 15.3s-14.4-9.5-16.1 1c4.4-2.6 6.7 1.1 4.5 5.3s-4.3 6.9-5.3 6.9c-1.1 0-1.9-2.8-3.1-7.7-1.3-5.1-1.3-14.2-6.5-13.1-5.2 1-11.7 8.8-11.7 8.8z"></path></svg>`,
	youtube: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48" enable-background="new -455 257 48 48" xml:space="preserve"><desc>Youtube</desc><path d="M43.9 15.3c-.4-3.1-2.2-5-5.3-5.3-3.6-.3-11.4-.5-15-.5-7.3 0-10.6.2-14.1.5-3.3.3-4.8 1.8-5.4 4.9-.4 2.1-.6 4.1-.6 8.9 0 4.3.2 6.9.5 9.2.4 3.1 2.5 4.8 5.7 5.1 3.6.3 10.9.5 14.4.5s11.2-.2 14.7-.6c3.1-.4 4.6-2 5.1-5.1 0 0 .5-3.3.5-9.1 0-3.3-.2-6.4-.5-8.5zM19.7 29.8V18l11.2 5.8-11.2 6z"></path></svg>`,
	instagram: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 25 25" enable-background="new 0 0 25 25" xml:space="preserve"><desc>Instagram</desc><path d="M16.396,3.312H8.604c-2.921,0-5.292,2.371-5.292,5.273v7.846c0,2.886,2.371,5.256,5.292,5.256h7.791c2.922,0,5.292-2.37,5.292-5.274V8.586C21.688,5.683,19.317,3.312,16.396,3.312L16.396,3.312z M7.722,12.5c0-2.64,2.142-4.778,4.778-4.778c2.636,0,4.777,2.138,4.777,4.778s-2.142,4.777-4.777,4.777C9.864,17.277,7.722,15.14,7.722,12.5zM17.756,8.182c-0.615,0-1.104-0.487-1.104-1.102s0.488-1.103,1.104-1.103c0.614,0,1.102,0.488,1.102,1.103S18.37,8.182,17.756,8.182L17.756,8.182z"></path><path d="M12.5,9.376c-1.731,0-3.124,1.398-3.124,3.124c0,1.725,1.393,3.124,3.124,3.124c1.732,0,3.124-1.399,3.124-3.124C15.624,10.775,14.211,9.376,12.5,9.376L12.5,9.376z"></path></svg>`,
	pinterest: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48" enable-background="new -455 257 48 48" xml:space="preserve"><desc>Pinterest</desc><path d="M24.9 5.5c4.2 0 7.7 1.3 10.5 3.9s4.1 5.7 4.1 9.2c0 4.6-1.2 8.4-3.5 11.3-2.3 3-5.3 4.5-8.9 4.5-1.2 0-2.3-.3-3.4-.9s-1.8-1.3-2.2-2c-.9 3.5-1.4 5.6-1.6 6.3-.7 2.4-2 4.9-4.1 7.5-.2.2-.4.2-.5-.1-.5-3.5-.5-6.4.1-8.7l2.9-12.6c-.5-.9-.7-2.1-.7-3.6 0-1.7.4-3.1 1.3-4.2s1.9-1.7 3.2-1.7c1 0 1.8.3 2.3 1 .5.6.8 1.5.8 2.4 0 .6-.1 1.4-.3 2.3-.2.9-.5 1.9-.9 3.1s-.6 2.1-.8 2.8c-.3 1.2-.1 2.2.7 3.1.7.9 1.7 1.3 3 1.3 2.1 0 3.8-1.2 5.2-3.6 1.4-2.4 2-5.3 2-8.7 0-2.6-.8-4.7-2.5-6.3-1.7-1.6-4-2.4-7-2.4-3.4 0-6.1 1.1-8.2 3.2S13 17.4 13 20.4c0 1.8.5 3.3 1.5 4.5.3.4.4.8.3 1.2 0 .1-.1.3-.2.6-.1.4-.1.6-.2.7 0 .1-.1.4-.2.6-.1.3-.3.4-.4.4h-.6c-3.1-1.3-4.7-4.2-4.7-8.7 0-3.6 1.5-6.9 4.4-9.9s7-4.3 12-4.3z"></path></svg>`,
	linkedin: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48" enable-background="new -455 257 48 48" xml:space="preserve"><desc>LinkedIn</desc><path d="M42.3 23.1v13.5h-7.9V24c0-3.2-1.1-5.3-4-5.3-2.2 0-3.5 1.5-4 2.9-.2.5-.3 1.2-.3 1.9v13.2h-7.9s.1-21.4 0-23.6h7.9v3.3s0 .1-.1.1h.1v-.1c1-1.6 2.9-3.9 7.1-3.9 5.2-.1 9.1 3.3 9.1 10.6zM10.1 1.6c-2.7 0-4.4 1.8-4.4 4.1S7.4 9.8 10 9.8h.1c2.7 0 4.4-1.8 4.4-4.1s-1.7-4.1-4.4-4.1zm-3.9 35H14V13H6.2v23.6z"></path></svg>`,
	soundcloud: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48" enable-background="new -455 257 48 48" xml:space="preserve"><desc>SoundCloud</desc><path d="M1.6 24.3c-.2 0-.3.1-.3.3l-.5 6.2.5 6c0 .2.2.3.3.3.2 0 .3-.1.3-.3l.6-6-.6-6.2c0-.2-.1-.3-.3-.3zM4.9 36.9zM4.9 25.1c0-.2-.2-.4-.4-.4s-.4.2-.4.4l-.5 5.8.5 6.1c0 .2.2.4.4.4s.4-.2.4-.4l.5-6.1-.5-5.8zM7.6 18.9c-.3 0-.5.2-.5.5l-.4 11.5.4 6c0 .3.2.5.5.5s.5-.2.5-.5l.5-6-.5-11.6c-.1-.2-.3-.4-.5-.4zM11.4 17.9c0-.3-.3-.6-.6-.6s-.6.3-.6.6l-.4 13 .4 5.9c0 .3.3.6.6.6s.6-.3.6-.6l.4-5.9-.4-13zM14.1 18c-.4 0-.7.3-.7.7l-.3 12.2.3 5.9c0 .4.3.7.7.7.4 0 .7-.3.7-.7l.3-5.9-.3-12.2c0-.4-.3-.7-.7-.7zM17.8 14.4c-.1-.1-.3-.1-.4-.1-.2 0-.4.1-.5.2-.2.1-.3.4-.3.6v.1l-.3 15.7.2 2.9.2 2.8c0 .4.4.8.8.8s.8-.3.8-.8l.3-5.7-.3-15.8c-.1-.3-.3-.5-.5-.7zM40.2 23.4c-1 0-1.9.2-2.7.5-.6-6.3-5.9-11.3-12.3-11.3-1.6 0-3.1.3-4.5.8-.5.2-.7.4-.7.8v22.2c0 .4.3.8.8.8h19.4c3.9 0 7-3.1 7-7 0-3.7-3.1-6.8-7-6.8z"></path></svg>`,
	telegram: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 60 60" xml:space="preserve"><desc>Telegram</desc><path d="M52.5,9L6.1,26.9c-0.9,0.4-0.9,1.8,0,2.3l11.9,4.9l4.4,14.1c0.3,0.8,1.2,1,1.8,0.5l6.8-6.4l12.9,8.7c0.7,0.4,1.6,0,1.7-0.7L54,10.3C54.2,9.5,53.3,8.7,52.5,9z M24.5,36.7L23.8,44l-3.6-11.2l25.3-16.8L24.5,36.7z"></path></svg>`,
	location: `<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 264.018 264.018" style="enable-background:new 0 0 264.018 264.018;" xml:space="preserve"><g><path d="M132.009,0c-42.66,0-77.366,34.706-77.366,77.366c0,11.634,2.52,22.815,7.488,33.24c0.1,0.223,0.205,0.442,0.317,0.661 l58.454,113.179c2.146,4.154,6.431,6.764,11.106,6.764c4.676,0,8.961-2.609,11.106-6.764l58.438-113.148 c0.101-0.195,0.195-0.392,0.285-0.591c5.001-10.455,7.536-21.67,7.536-33.341C209.375,34.706,174.669,0,132.009,0z M132.009,117.861c-22.329,0-40.495-18.166-40.495-40.495c0-22.328,18.166-40.494,40.495-40.494s40.495,18.166,40.495,40.494 C172.504,99.695,154.338,117.861,132.009,117.861z"/><path d="M161.81,249.018h-59.602c-4.143,0-7.5,3.357-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h59.602c4.143,0,7.5-3.357,7.5-7.5 C169.31,252.375,165.952,249.018,161.81,249.018z"/></g></svg>`,
	phone: `<svg width="32px" height="32px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title>phone</title><path d="M26,29h-.17C6.18,27.87,3.39,11.29,3,6.23A3,3,0,0,1,5.76,3h5.51a2,2,0,0,1,1.86,1.26L14.65,8a2,2,0,0,1-.44,2.16l-2.13,2.15a9.37,9.37,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,24,17.35l3.77,1.51A2,2,0,0,1,29,20.72V26A3,3,0,0,1,26,29ZM6,5A1,1,0,0,0,5,6v.08C5.46,12,8.41,26,25.94,27A1,1,0,0,0,27,26.06V20.72l-3.77-1.51-2.87,2.85L19.88,22C11.18,20.91,10,12.21,10,12.12l-.06-.48,2.84-2.87L11.28,5Z" transform="translate(0)"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>`,
	mobilePhone: `<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 502 502" style="enable-background:new 0 0 502 502;" xml:space="preserve"><g><g><path d="M103.656,466.086c0,19.803,15,35.914,33.438,35.914h227.813c18.438,0,33.438-16.111,33.438-35.914V35.914 c0-19.803-15-35.914-33.438-35.914H137.094c-18.438,0-33.438,16.111-33.438,35.914V466.086z M123.656,78.047h254.688v302.37 H123.656V78.047z M123.656,35.914c0-8.775,6.028-15.914,13.438-15.914h227.813c7.409,0,13.438,7.139,13.438,15.914v22.133H123.656 V35.914z M378.344,466.086c0,8.775-6.028,15.914-13.438,15.914H137.094c-7.41,0-13.438-7.139-13.438-15.914v-65.669h254.688 V466.086z"/><path d="M251,468.83c15.517,0,28.14-12.623,28.14-28.14s-12.623-28.14-28.14-28.14c-15.516,0-28.14,12.623-28.14,28.14 S235.484,468.83,251,468.83z M251,432.551c4.488,0,8.14,3.651,8.14,8.14s-3.651,8.14-8.14,8.14s-8.14-3.651-8.14-8.14 S246.512,432.551,251,432.551z"/><path d="M260.329,30.061h-18.658c-5.523,0-10,4.478-10,10s4.477,10,10,10h18.658c5.522,0,10-4.478,10-10 S265.852,30.061,260.329,30.061z"/><path d="M152.527,165.85c-5.523,0-10,4.478-10,10v176.215c0,5.522,4.477,10,10,10s10-4.478,10-10V175.85 C162.527,170.327,158.05,165.85,152.527,165.85z"/><path d="M152.527,98.473c-5.523,0-10,4.478-10,10v26.951c0,5.522,4.477,10,10,10s10-4.478,10-10v-26.951 C162.527,102.95,158.05,98.473,152.527,98.473z"/></g></g></svg>`,
}

export default class M2GisBlock {
	constructor(selector, options = {}) {
		this.el = document.querySelector(selector);
		if (!this.el) return;
		this.icons = icons;
		this._data = {};
		this._data.contacts = options.contacts;
		this._data.title = options.title;
		this.style = options.style;
		this.el.innerHTML = this.block();
		this.title = this._data.title;
		this.src = this._data.contacts.addresses[0].src;
		this.contacts = options.contacts;
	}

	set title(title) {
		this.titleNode = this.titleNode || this.el.querySelector('.m2gisblock__title');
		this.titleNode.textContent = title || '';
	}

	set src(src) {
		this.iframeNode = this.iframeNode || this.el.querySelector('iframe');
		this.iframeNode.src = src;
	}

	set contacts(data) {
		this._data.contacts = data;
		this.contactsNode = this.contactsNode || this.el.querySelector('.m2gisblock__contact-items');
		this.contactsNode.innerHTML = this.contactItems();
		const addressTriggers = this.contactsNode.querySelectorAll('.m2gisblock__contact-item-address');
		addressTriggers.forEach(triggerNode => {
			triggerNode.addEventListener('click', (e) => {
				e.preventDefault();
				this.src = e.target.dataset.src;
			});
		});
	}

	block() {
		const _class = `m2gisblock${this.style.textPosition === 'right' ? ' m2gisblock_right' : ''}${this.style.mobileTextPosition === 'bottom' ? 'm2gisblock_mob-bottom' : ''}`;
		return `<div class="${_class}">
			<div class="m2gisblock__text">
				<div class="m2gisblock__title"></div>
				<div class="m2gisblock__contact-items"></div>
				<div class="m2gisblock__email">
					<a href='mailto:"${this._data.contacts.email}"'>${this._data.contacts.email}</a>
				</div>
				<div class="m2gisblock__sm">
					${this.smItems()}
				</div>
			</div>
			<div class="m2gisblock__map">${this.iframe()}</div>
		</div>`;
	}
	contactItem({ address, phones, src }) {
		const phonesArr = phones.map(phoneObj => {
			let href = `tel:${phoneObj.number}`;
			let icon = this.icons.mobilePhone;
			let targetAttr = '';
			if (phoneObj.type === 'landline') {
				icon = this.icons.phone;
			}
			if (phoneObj.type === 'whatsapp') {
				href = `https://wa.me/${phoneObj.number.replace(/[^\d]/g, '')}`;
				icon = this.icons.whastapp;
				targetAttr = 'target="_blank"';
			}
			return `
				<div class="m2gisblock__contact-item-phone">
					<a href="${href}"${targetAttr}><span>${icon}</span> ${phoneObj.number}</a>
				</div>
			`;
		});
		return `<div class="m2gisblock__contact-item">
				<div class="m2gisblock__contact-item-address" data-src="${src}">
					${address 
						? `<span class="m2gisblock__location-icon">${this.icons.location}</span> ${address}`
						: ''}
				</div>
				<div class="m2gisblock__contact-item-phone">
					${phonesArr.join('\n')}
				</div>
			</div>`;
	}
	contactItems() {
		return this._data.contacts.addresses
			.map(item =>
				this.contactItem({ address: item.address, phones: item.phones, src: item.src })
			)
			.join("\n");
	}
	smItem({iconName, src}) {
		const icon = this.icons[iconName];
		return `<div class="m2gisblock__sm-item">
				<a href="${src}" target="_blank">
					${icon}
				</a>
			</div>`;
	}
	smItems() {
		return Object.keys(this._data.contacts.socialLinks)
			.map(key => this._data.contacts.socialLinks[key]
				? this.smItem({iconName: key, src: this._data.contacts.socialLinks[key]})
				: '')
			.join("\n");
	}
	iframe() {
		return `<iframe
				class="m2gisblock-iframe"
				frameborder="no"
				style="box-sizing: border-box;"
				src="${this.src}"
			></iframe>`;
	}
}

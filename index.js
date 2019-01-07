const template = `
<form
  action="${process.env.S3_URL}"
  method="post"
  enctype="multipart/form-data"
>
  <input type="hidden" name="key" value="" />
  <input type="hidden" name="AWSAccessKeyId" value="${process.env.AWS_ACCESS_KEY_ID}" />
  <input type="hidden" name="acl" value="private" />
  <input type="hidden" name="success_action_redirect" value="https://www.google.co.jp" />
  <input type="hidden" name="policy" value="${process.env.POLICY}"  />
  <input type="hidden" name="signature" value="${process.env.SIGNATURE}" />
  <input type="hidden" name="Content-Type" value="" />
  <input type="file" name="file" />
  <input type="submit" name="button" value="Upload" />
</form>
`;

class XUploader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
    this.shadowRoot.querySelector('form').addEventListener('submit', this.onSubmit);
  }

  onSubmit({ target }) {
    e.preventDefault();
    const key = target.querySelector('input[name="key"]');
    const inputFile = target.querySelector('input[name="file"]');
    const file = inputFile.files[0];
    key.setAttribute('value', `uploads/${file.name}`);
    target.submit();
  }
}

window.customElements.define('x-uploader', XUploader);

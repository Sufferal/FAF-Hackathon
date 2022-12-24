const fetchRegister = async () => {
      const btn = document.querySelector('.submit-btn')
      const input = document.querySelector('.form-input')
      const formAlert = document.querySelector('.form-alert')
      btn.addEventListener('click', async (e) => {
        e.preventDefault()
        const nameValue = input.value

        try {
          const { data } = await axios.post('/api/register', { name: nameValue })
        } catch (error) {
          formAlert.textContent = error.response.data.msg
        }
        input.value = ''
      })
}
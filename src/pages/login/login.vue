<div>
  <form id="login" v-on:submit="login">
    <h3>Login</h3>

    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" name="username" id="username" v-model="username">
    </div>
    <div class="form-group">
      <label for="username">Password</label>
      <input type="password" name="password" id="password" v-model="password">
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-sm btn-primary">Login</button>
    </div>
  </form>
</div>

import { ComponentProps } from "react";

function ProfileCard(props: ComponentProps<"svg">) {
  return (
    <svg
      width={600}
      height={400}
      viewBox="0 0 871 556"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_25_6)">
        <rect width={871} height={556} rx={18} fill="#27272A" />
        <path
          d="M92.298 79.5h-3.963c-.234-1.14-.644-2.141-1.23-3.004a8.196 8.196 0 00-2.11-2.174 8.956 8.956 0 00-2.732-1.342 10.913 10.913 0 00-3.132-.447c-1.982 0-3.777.5-5.386 1.502-1.598 1.001-2.87 2.477-3.819 4.426-.937 1.95-1.406 4.342-1.406 7.175 0 2.834.469 5.226 1.406 7.175.948 1.95 2.221 3.425 3.82 4.427 1.608 1.001 3.403 1.502 5.385 1.502 1.086 0 2.13-.15 3.132-.447a9.166 9.166 0 002.732-1.327 8.422 8.422 0 002.11-2.189c.586-.874.996-1.875 1.23-3.004h3.963c-.298 1.672-.841 3.17-1.63 4.49a12.27 12.27 0 01-2.94 3.372 12.87 12.87 0 01-3.947 2.093c-1.449.48-2.999.719-4.65.719-2.791 0-5.274-.681-7.447-2.045-2.173-1.364-3.883-3.303-5.13-5.817-1.246-2.514-1.87-5.497-1.87-8.949 0-3.451.624-6.434 1.87-8.948 1.247-2.515 2.957-4.454 5.13-5.817 2.173-1.364 4.656-2.046 7.447-2.046 1.651 0 3.201.24 4.65.72a12.69 12.69 0 013.947 2.109 12.053 12.053 0 012.94 3.356c.789 1.31 1.332 2.807 1.63 4.49zm9.664 7.734V102h-3.771V69.273h3.771V81.29h.32a6.934 6.934 0 012.589-3.02c1.161-.757 2.706-1.135 4.634-1.135 1.672 0 3.137.335 4.394 1.007 1.258.66 2.232 1.678 2.925 3.052.703 1.364 1.054 3.1 1.054 5.21V102h-3.771V86.66c0-1.95-.506-3.458-1.518-4.523-1.001-1.076-2.392-1.614-4.171-1.614-1.236 0-2.344.26-3.324.783-.969.522-1.736 1.284-2.301 2.285-.554 1.001-.831 2.216-.831 3.643zm30.039 15.341c-1.556 0-2.967-.293-4.235-.879-1.268-.596-2.274-1.454-3.02-2.572-.746-1.13-1.119-2.493-1.119-4.091 0-1.407.277-2.546.831-3.42a5.867 5.867 0 012.222-2.078c.926-.5 1.949-.873 3.068-1.118a37.35 37.35 0 013.403-.607c1.492-.192 2.701-.336 3.628-.432.937-.106 1.619-.282 2.045-.527.437-.245.656-.671.656-1.279v-.127c0-1.577-.432-2.802-1.295-3.676-.852-.873-2.146-1.31-3.883-1.31-1.8 0-3.212.394-4.235 1.182-1.022.789-1.742 1.63-2.157 2.525l-3.58-1.278c.64-1.492 1.492-2.653 2.557-3.484a9.583 9.583 0 013.516-1.758 14.591 14.591 0 013.771-.511c.789 0 1.694.096 2.717.288a8.697 8.697 0 012.988 1.134c.97.575 1.774 1.444 2.413 2.605.639 1.161.959 2.717.959 4.666V102h-3.771v-3.324h-.192c-.256.533-.682 1.103-1.279 1.71-.596.607-1.39 1.124-2.381 1.55-.99.426-2.2.639-3.627.639zm.575-3.388c1.492 0 2.749-.293 3.771-.878 1.034-.586 1.812-1.343 2.334-2.27.532-.926.799-1.901.799-2.924v-3.452c-.16.192-.512.368-1.055.528-.533.149-1.151.282-1.854.4-.692.106-1.369.202-2.029.287-.65.074-1.177.138-1.582.192-.98.127-1.897.335-2.749.623-.842.277-1.523.698-2.045 1.262-.512.554-.767 1.31-.767 2.27 0 1.31.484 2.3 1.454 2.972.98.66 2.221.99 3.723.99zm21.33-29.914V102h-3.772V69.273h3.772zm10.678 0V102h-3.771V69.273h3.771zm17.199 33.238c-2.365 0-4.405-.522-6.12-1.566-1.705-1.054-3.021-2.524-3.948-4.41-.916-1.897-1.374-4.102-1.374-6.616 0-2.514.458-4.73 1.374-6.648.927-1.928 2.216-3.43 3.868-4.506 1.662-1.087 3.601-1.63 5.816-1.63 1.279 0 2.541.213 3.788.64 1.246.425 2.381 1.118 3.403 2.077 1.023.948 1.838 2.205 2.445 3.77.608 1.567.911 3.495.911 5.786v1.598h-18.92v-3.26h15.085c0-1.385-.277-2.621-.831-3.708a6.26 6.26 0 00-2.333-2.572c-1.001-.629-2.184-.943-3.548-.943-1.502 0-2.801.373-3.899 1.118a7.364 7.364 0 00-2.509 2.877 8.45 8.45 0 00-.879 3.803v2.173c0 1.854.32 3.425.959 4.715.65 1.278 1.55 2.253 2.701 2.924 1.15.66 2.488.99 4.011.99.991 0 1.886-.138 2.685-.415a5.75 5.75 0 002.093-1.278c.586-.576 1.039-1.29 1.358-2.142l3.644 1.023a8.08 8.08 0 01-1.934 3.26c-.905.927-2.024 1.651-3.356 2.173-1.331.512-2.828.767-4.49.767zm19.671-15.277V102h-3.771V77.454h3.644v3.836h.319a7.014 7.014 0 012.621-3.005c1.172-.766 2.685-1.15 4.538-1.15 1.662 0 3.116.34 4.363 1.023 1.246.67 2.216 1.694 2.908 3.068.693 1.364 1.039 3.09 1.039 5.177V102h-3.771V86.66c0-1.93-.501-3.431-1.502-4.507-1.002-1.087-2.376-1.63-4.123-1.63-1.204 0-2.28.26-3.228.783-.938.522-1.678 1.284-2.222 2.285-.543 1.001-.815 2.216-.815 3.643zm32.46 24.482c-1.822 0-3.388-.234-4.698-.703-1.31-.458-2.402-1.066-3.276-1.822-.863-.746-1.55-1.545-2.061-2.397l3.004-2.109c.341.447.772.958 1.294 1.534.522.586 1.236 1.092 2.142 1.518.916.437 2.114.655 3.595.655 1.982 0 3.617-.479 4.906-1.438 1.289-.959 1.934-2.461 1.934-4.507v-4.985h-.32a20.168 20.168 0 01-1.183 1.662c-.5.65-1.225 1.23-2.173 1.741-.937.501-2.205.751-3.803.751-1.982 0-3.761-.468-5.337-1.406-1.567-.937-2.808-2.3-3.724-4.09-.905-1.79-1.358-3.964-1.358-6.52 0-2.515.442-4.704 1.326-6.568.884-1.875 2.115-3.324 3.692-4.347 1.576-1.033 3.398-1.55 5.465-1.55 1.598 0 2.866.266 3.803.799.948.522 1.673 1.119 2.173 1.79.512.66.906 1.204 1.183 1.63h.383v-3.9h3.644v25.249c0 2.109-.48 3.825-1.438 5.146-.949 1.331-2.227 2.306-3.836 2.924-1.598.629-3.377.943-5.337.943zm-.128-13.487c1.513 0 2.791-.347 3.835-1.039s1.838-1.689 2.381-2.988c.544-1.3.815-2.855.815-4.666 0-1.769-.266-3.33-.799-4.683-.532-1.353-1.321-2.413-2.365-3.18-1.044-.767-2.333-1.15-3.867-1.15-1.598 0-2.929.405-3.995 1.214-1.054.81-1.848 1.897-2.381 3.26-.522 1.364-.783 2.877-.783 4.538 0 1.705.266 3.213.799 4.523.543 1.3 1.342 2.322 2.397 3.068 1.065.735 2.387 1.103 3.963 1.103zm27.933 4.282c-2.365 0-4.405-.522-6.12-1.566-1.704-1.054-3.02-2.524-3.947-4.41-.916-1.897-1.374-4.102-1.374-6.616 0-2.514.458-4.73 1.374-6.648.927-1.928 2.216-3.43 3.867-4.506 1.662-1.087 3.601-1.63 5.817-1.63 1.278 0 2.541.213 3.787.64 1.247.425 2.381 1.118 3.404 2.077 1.023.948 1.838 2.205 2.445 3.77.607 1.567.911 3.495.911 5.786v1.598h-18.921v-3.26h15.086c0-1.385-.277-2.621-.831-3.708a6.266 6.266 0 00-2.333-2.572c-1.002-.629-2.184-.943-3.548-.943-1.502 0-2.802.373-3.899 1.118a7.356 7.356 0 00-2.509 2.877 8.45 8.45 0 00-.879 3.803v2.173c0 1.854.32 3.425.959 4.715.65 1.278 1.55 2.253 2.7 2.924 1.151.66 2.488.99 4.011.99.991 0 1.886-.138 2.685-.415a5.747 5.747 0 002.094-1.278c.585-.576 1.038-1.29 1.358-2.142l3.643 1.023a8.077 8.077 0 01-1.933 3.26c-.906.927-2.024 1.651-3.356 2.173-1.332.512-2.829.767-4.491.767zm33.287-19.56l-3.388.96a6.276 6.276 0 00-.943-1.646c-.404-.544-.958-.991-1.662-1.343-.703-.351-1.603-.527-2.7-.527-1.502 0-2.754.346-3.755 1.039-.991.681-1.487 1.55-1.487 2.604 0 .938.341 1.678 1.023 2.222.682.543 1.747.996 3.196 1.358l3.644.895c2.194.532 3.829 1.347 4.905 2.445 1.076 1.086 1.614 2.487 1.614 4.203 0 1.406-.404 2.663-1.214 3.77-.799 1.109-1.918 1.982-3.356 2.622-1.438.639-3.111.958-5.018.958-2.503 0-4.575-.543-6.216-1.63-1.64-1.086-2.679-2.674-3.116-4.762l3.58-.895c.34 1.322.985 2.312 1.933 2.973.959.66 2.211.99 3.755.99 1.758 0 3.154-.372 4.187-1.118 1.044-.757 1.566-1.662 1.566-2.717 0-.852-.298-1.566-.895-2.141-.596-.586-1.512-1.023-2.748-1.31l-4.091-.96c-2.248-.532-3.899-1.358-4.954-2.476-1.044-1.13-1.566-2.541-1.566-4.235 0-1.385.389-2.61 1.167-3.675.788-1.066 1.859-1.902 3.212-2.51 1.363-.606 2.908-.91 4.634-.91 2.429 0 4.336.533 5.721 1.598 1.395 1.065 2.386 2.471 2.972 4.219z"
          fill="#fff"
        />
        <rect x={62} y={221} width={149} height={50} rx={12} fill="#14502B" />
        <path
          d="M109.29 255.5v-18.909h11.412v2.031h-9.122v6.389h8.531v2.032h-8.531v6.426h9.269v2.031H109.29zm19.417.332c-.899 0-1.715-.169-2.447-.507a4.202 4.202 0 01-1.745-1.487c-.431-.652-.646-1.44-.646-2.364 0-.812.16-1.471.48-1.975.32-.511.748-.911 1.283-1.201a6.783 6.783 0 011.773-.646 21.423 21.423 0 011.966-.351 85.98 85.98 0 012.096-.249c.542-.062.936-.163 1.182-.305.253-.141.379-.388.379-.738v-.074c0-.911-.25-1.619-.748-2.124-.493-.505-1.24-.757-2.244-.757-1.04 0-1.856.228-2.447.683-.59.456-1.006.942-1.246 1.459l-2.068-.739c.369-.861.862-1.532 1.477-2.012a5.534 5.534 0 012.031-1.016 8.434 8.434 0 012.179-.295c.456 0 .979.055 1.57.166a5.02 5.02 0 011.727.655c.56.333 1.024.834 1.394 1.505.369.671.554 1.57.554 2.696v9.344h-2.179v-1.92h-.111c-.148.307-.394.637-.739.987-.344.351-.803.65-1.375.896-.573.246-1.272.369-2.096.369zm.332-1.957c.862 0 1.588-.169 2.179-.508.597-.338 1.046-.775 1.348-1.311a3.339 3.339 0 00.462-1.69v-1.994c-.093.111-.296.213-.61.305a10.31 10.31 0 01-1.071.231c-.4.061-.791.117-1.172.166-.376.043-.68.08-.914.111a8.329 8.329 0 00-1.588.36c-.487.16-.881.403-1.182.729-.296.32-.443.757-.443 1.311 0 .757.28 1.33.84 1.718.566.381 1.283.572 2.151.572zm20.19-9.381l-1.957.554a3.643 3.643 0 00-.545-.951 2.643 2.643 0 00-.96-.775c-.406-.203-.927-.305-1.561-.305-.867 0-1.591.2-2.169.6-.573.394-.859.896-.859 1.505 0 .542.197.97.591 1.284.394.313 1.009.575 1.847.784l2.105.517c1.268.308 2.213.779 2.834 1.413.622.628.933 1.437.933 2.428 0 .813-.234 1.539-.702 2.179-.462.64-1.108 1.145-1.939 1.514-.831.37-1.797.554-2.899.554-1.447 0-2.644-.313-3.592-.941-.948-.628-1.548-1.545-1.8-2.752l2.068-.517c.197.763.569 1.336 1.117 1.718.554.381 1.278.572 2.17.572 1.016 0 1.822-.215 2.419-.646.603-.437.905-.961.905-1.57 0-.492-.172-.905-.517-1.237-.345-.339-.874-.591-1.588-.757l-2.364-.554c-1.299-.308-2.253-.785-2.862-1.431-.603-.653-.905-1.468-.905-2.447 0-.8.225-1.508.674-2.124.456-.615 1.074-1.098 1.856-1.449.788-.351 1.68-.526 2.677-.526 1.404 0 2.506.307 3.306.923.806.615 1.379 1.428 1.717 2.437zm4.942 16.324a4.82 4.82 0 01-.988-.092c-.289-.056-.489-.111-.6-.166l.554-1.921c.529.136.997.185 1.403.148.407-.037.767-.219 1.081-.545.32-.32.612-.84.877-1.56l.406-1.108-5.244-14.256h2.363l3.915 11.301h.148l3.915-11.301h2.363l-6.02 16.25c-.27.733-.606 1.339-1.006 1.819-.4.486-.865.846-1.394 1.08-.523.234-1.114.351-1.773.351z"
          fill="#30E372"
        />
        <rect x={62} y={150} width={149} height={55} rx={12} fill="#1A337C" />
        <path
          d="M83.79 187v-18.909h6.61c1.318 0 2.404.228 3.26.683.855.449 1.493 1.056 1.911 1.819.419.757.628 1.597.628 2.521 0 .812-.145 1.483-.434 2.012-.283.53-.659.948-1.127 1.256a5.101 5.101 0 01-1.505.683v.185c.58.037 1.16.24 1.746.609.584.37 1.074.899 1.468 1.588.394.69.59 1.533.59 2.53 0 .948-.215 1.801-.646 2.558-.43.757-1.11 1.357-2.04 1.8-.93.443-2.14.665-3.629.665H83.79zm2.29-2.031h4.542c1.496 0 2.558-.29 3.186-.868.633-.585.95-1.293.95-2.124a3.37 3.37 0 00-.489-1.772 3.548 3.548 0 00-1.394-1.312c-.603-.332-1.317-.498-2.142-.498h-4.654v6.574zm0-8.568h4.247c.69 0 1.31-.136 1.865-.407a3.258 3.258 0 001.33-1.145c.332-.492.498-1.071.498-1.735 0-.831-.29-1.536-.868-2.115-.579-.584-1.496-.877-2.751-.877h-4.322v6.279zm20.27 10.894c-1.366 0-2.545-.301-3.536-.904-.985-.61-1.745-1.459-2.28-2.549-.53-1.095-.794-2.369-.794-3.822 0-1.453.264-2.733.794-3.841.535-1.114 1.28-1.982 2.234-2.604.96-.628 2.081-.941 3.361-.941.739 0 1.468.123 2.188.369.72.246 1.376.646 1.967 1.2.591.548 1.062 1.274 1.412 2.179.351.905.527 2.019.527 3.342v.924h-10.932v-1.884h8.716c0-.8-.16-1.514-.48-2.142a3.62 3.62 0 00-1.348-1.486c-.579-.364-1.262-.545-2.05-.545-.868 0-1.619.215-2.253.646a4.259 4.259 0 00-1.45 1.662 4.89 4.89 0 00-.507 2.198v1.255c0 1.071.184 1.979.554 2.724.375.739.895 1.302 1.56 1.69.665.381 1.437.572 2.317.572.573 0 1.09-.08 1.552-.24a3.308 3.308 0 001.209-.739c.339-.332.6-.744.785-1.237l2.105.591a4.678 4.678 0 01-1.117 1.884c-.523.535-1.17.954-1.939 1.255-.769.296-1.634.443-2.595.443zm14.912 5.319c-1.053 0-1.958-.136-2.715-.407-.757-.264-1.388-.615-1.893-1.052a5.794 5.794 0 01-1.191-1.385l1.736-1.219c.197.259.446.554.748.887.302.338.714.63 1.237.877.53.252 1.222.378 2.078.378 1.145 0 2.089-.277 2.834-.831.745-.554 1.117-1.422 1.117-2.603v-2.881h-.184c-.16.258-.388.578-.683.96-.29.376-.708.711-1.256 1.006-.542.29-1.274.434-2.198.434-1.144 0-2.172-.27-3.083-.812-.905-.542-1.622-1.33-2.152-2.364-.523-1.034-.784-2.29-.784-3.767 0-1.452.255-2.717.766-3.795.511-1.083 1.222-1.92 2.133-2.511.911-.597 1.963-.895 3.157-.895.924 0 1.656.153 2.198.461.548.302.966.646 1.255 1.034.296.382.524.696.684.942h.221v-2.253h2.105v14.588c0 1.219-.277 2.21-.831 2.973-.547.77-1.286 1.333-2.215 1.69-.924.363-1.952.545-3.084.545zm-.074-7.793c.874 0 1.613-.2 2.216-.6.603-.4 1.062-.976 1.375-1.727.314-.751.471-1.649.471-2.696 0-1.021-.154-1.923-.461-2.705-.308-.782-.764-1.394-1.367-1.837-.603-.444-1.348-.665-2.234-.665-.923 0-1.693.234-2.308.702-.61.467-1.068 1.095-1.376 1.883-.302.788-.453 1.662-.453 2.622 0 .985.154 1.856.462 2.613.314.751.776 1.342 1.385 1.773.616.425 1.379.637 2.29.637zM131.381 187v-14.182h2.179V187h-2.179zm1.108-16.545c-.425 0-.791-.145-1.099-.434a1.397 1.397 0 01-.452-1.044c0-.406.151-.754.452-1.043a1.551 1.551 0 011.099-.434c.425 0 .788.145 1.089.434.308.289.462.637.462 1.043 0 .407-.154.754-.462 1.044a1.516 1.516 0 01-1.089.434zm7.241 8.014V187h-2.179v-14.182h2.105v2.216h.185a4.049 4.049 0 011.514-1.736c.677-.443 1.551-.664 2.622-.664.96 0 1.801.196 2.521.59.72.388 1.28.979 1.68 1.773.4.788.6 1.785.6 2.992V187h-2.179v-8.864c0-1.114-.289-1.982-.868-2.603-.578-.628-1.372-.942-2.382-.942-.695 0-1.317.151-1.865.452a3.243 3.243 0 00-1.283 1.321c-.314.578-.471 1.28-.471 2.105zm15.209 0V187h-2.179v-14.182h2.105v2.216h.185a4.049 4.049 0 011.514-1.736c.677-.443 1.551-.664 2.622-.664.96 0 1.801.196 2.521.59.72.388 1.28.979 1.68 1.773.4.788.6 1.785.6 2.992V187h-2.179v-8.864c0-1.114-.289-1.982-.868-2.603-.578-.628-1.372-.942-2.382-.942-.695 0-1.317.151-1.865.452a3.243 3.243 0 00-1.283 1.321c-.314.578-.471 1.28-.471 2.105zm18.976 8.826c-1.367 0-2.545-.301-3.536-.904-.985-.61-1.745-1.459-2.281-2.549-.529-1.095-.794-2.369-.794-3.822 0-1.453.265-2.733.794-3.841.536-1.114 1.28-1.982 2.235-2.604.96-.628 2.08-.941 3.36-.941.739 0 1.468.123 2.189.369.72.246 1.375.646 1.966 1.2.591.548 1.062 1.274 1.413 2.179.351.905.526 2.019.526 3.342v.924h-10.932v-1.884h8.716c0-.8-.16-1.514-.48-2.142a3.613 3.613 0 00-1.348-1.486c-.579-.364-1.262-.545-2.05-.545-.868 0-1.618.215-2.252.646a4.25 4.25 0 00-1.45 1.662 4.877 4.877 0 00-.508 2.198v1.255c0 1.071.185 1.979.554 2.724.376.739.896 1.302 1.56 1.69.665.381 1.438.572 2.318.572.572 0 1.089-.08 1.551-.24a3.312 3.312 0 001.21-.739c.338-.332.6-.744.784-1.237l2.106.591a4.669 4.669 0 01-1.118 1.884c-.523.535-1.169.954-1.939 1.255-.769.296-1.634.443-2.594.443zm9.187-.295v-14.182h2.105v2.142h.148c.258-.701.726-1.271 1.403-1.708.677-.437 1.44-.655 2.29-.655.16 0 .36.003.6.009.24.006.422.015.545.028v2.215a6.763 6.763 0 00-.508-.083 5.019 5.019 0 00-.822-.064c-.689 0-1.305.144-1.846.434a3.275 3.275 0 00-1.275 1.181c-.307.499-.461 1.068-.461 1.709V187h-2.179z"
          fill="#4088FD"
        />
        <rect x={62} y={287} width={149} height={50} rx={12} fill="#854D0E" />
        <path
          d="M104.706 319.5v-13.442c-1.014 2.86-2.21 5.72-3.042 7.462h-1.872c-.65-1.534-2.158-4.602-3.198-7.462V319.5h-1.846v-16.9h1.898c1.118 2.938 3.094 7.202 4.004 8.84.858-1.638 2.782-5.902 3.848-8.84h2.054v16.9h-1.846zm10.317-12.688c3.51 0 5.33 2.288 5.174 6.292l-.026 1.066-8.814.052c0 2.314 1.534 3.926 3.718 3.926 1.092 0 2.262-.39 3.666-1.742l1.092 1.352a6.392 6.392 0 01-4.706 2.08c-3.25 0-5.59-2.34-5.59-5.616v-1.118c.104-3.978 1.95-6.292 5.486-6.292zm3.224 5.746c.13-2.652-1.014-4.134-3.406-4.134-2.392 0-3.354 1.586-3.458 4.134h6.864zM134.7 319.5h-1.976v-.936c-.91.806-2.132 1.248-3.484 1.248-3.432 0-5.694-2.704-5.694-6.838 0-3.9 2.002-6.162 5.486-6.162 1.638 0 2.756.572 3.692 1.898v-6.24l1.846.13v15.47c0 .468 0 .988.13 1.43zm-5.46-1.456c1.846 0 2.912-.572 3.484-1.898v-5.278c-.806-1.56-2.132-2.444-3.692-2.444-2.21 0-3.64 1.794-3.64 4.55 0 2.964 1.586 5.07 3.848 5.07zm14.113-13.078c-.884 0-1.352-.468-1.352-1.378 0-.858.494-1.326 1.352-1.326.884 0 1.352.468 1.352 1.326 0 .91-.468 1.378-1.352 1.378zm4.888 13.104c0 .468 0 .988.13 1.43h-9.412v-1.508h3.718v-9.334l-2.522-.13v-1.378h4.316l-.026 10.842h3.796v.078zm14.529 1.43h-1.976v-1.768c-.676 1.274-2.132 2.106-3.692 2.106-2.652 0-4.55-2.782-4.55-6.058v-6.656h1.95v7.124c0 2.08 1.43 3.952 3.458 3.952 1.352 0 1.924-.832 2.834-2.314v-8.736h1.846v10.92c0 .468 0 .988.13 1.43zm12.449-12.688c2.184 0 2.678 1.638 2.678 3.822v8.866h-1.742v-9.308c0-.962-.494-1.768-1.43-1.768-.572 0-1.04.468-1.612 1.768.026.208.026.416.026.676v8.632h-1.742v-9.1c0-.962-.52-1.742-1.43-1.742-.676 0-1.066.52-1.586 1.56v7.852c0 .468 0 .988.13 1.43h-1.976v-12.35h1.846v1.118c.494-1.066 1.04-1.456 2.08-1.456 1.196 0 1.976.78 2.366 1.95v-.104c.468-1.274.988-1.846 2.392-1.846z"
          fill="#EFBC1D"
        />
        <rect x={62} y={353} width={149} height={50} rx={12} fill="#5C1A1A" />
        <path
          d="M120.136 385.5h-1.976v-7.358h-7.098v7.358h-1.846v-16.9h1.846v8.008h7.098V368.6h1.846v15.47c0 .468 0 .988.13 1.43zm8.367-12.688c3.276 0 5.616 2.34 5.616 5.616v7.072h-2.314c.182-.286.468-.962.468-1.508-.624 1.066-2.106 1.794-3.848 1.82-2.73 0-4.888-1.222-4.888-3.51 0-2.47 2.47-3.744 7.436-3.744.416 0 .858 0 1.3.026v-.156c0-2.34-1.508-3.952-3.692-3.952-1.118 0-2.288.416-3.666 1.742l-1.118-1.326a6.382 6.382 0 014.706-2.08zm-.416 11.44c1.482 0 3.198-.676 4.186-2.054v-2.002c-.468-.026-.936-.026-1.378-.026-3.744 0-5.486.598-5.486 2.132 0 1.274 1.222 1.95 2.678 1.95zm20.171-9.074c-2.106-1.144-4.446-.13-4.862 1.716v7.098h3.666v.078c0 .468 0 .988.13 1.43h-9.412v-1.508h3.822v-9.334l-2.522-.13v-1.378h4.55c-.156.234-.338 1.17-.338 1.456.858-1.638 2.808-1.794 3.77-1.794.468 0 .936.026 2.34.572l-1.144 1.794zm14.737 10.322h-1.976v-.936c-.91.806-2.132 1.248-3.484 1.248-3.432 0-5.694-2.704-5.694-6.838 0-3.9 2.002-6.162 5.486-6.162 1.638 0 2.756.572 3.692 1.898v-6.24l1.846.13v15.47c0 .468 0 .988.13 1.43zm-5.46-1.456c1.846 0 2.912-.572 3.484-1.898v-5.278c-.806-1.56-2.132-2.444-3.692-2.444-2.21 0-3.64 1.794-3.64 4.55 0 2.964 1.586 5.07 3.848 5.07z"
          fill="#FE3333"
        />
        <rect x={236} y={168} width={542} height={18} rx={9} fill="#3B3A3D" />
        <rect x={236} y={168} width={345} height={18} rx={9} fill="#3178C7" />
        <rect x={236} y={237} width={542} height={18} rx={9} fill="#3B3A3D" />
        <rect x={236} y={237} width={455} height={18} rx={9} fill="#3178C7" />
        <rect x={236} y={302} width={542} height={18} rx={9} fill="#3B3A3D" />
        <rect x={236} y={302} width={68} height={18} rx={9} fill="#3178C7" />
        <rect x={236} y={367} width={542} height={18} rx={9} fill="#3B3A3D" />
        <rect x={236} y={367} width={21} height={18} rx={9} fill="#3178C7" />
        <path
          d="M77.546 463.545c-.137-1.151-.69-2.045-1.66-2.681-.97-.637-2.159-.955-3.568-.955-1.03 0-1.932.167-2.704.5-.766.333-1.364.792-1.796 1.375a3.295 3.295 0 00-.636 1.989c0 .621.147 1.155.443 1.602.303.439.69.807 1.16 1.102.469.288.961.527 1.476.716.516.182.989.33 1.42.443l2.365.637c.605.159 1.28.379 2.022.659.75.28 1.466.663 2.148 1.148a5.839 5.839 0 011.705 1.84c.446.75.67 1.671.67 2.762 0 1.257-.33 2.394-.989 3.409-.651 1.015-1.606 1.822-2.863 2.42-1.25.599-2.77.898-4.557.898-1.667 0-3.11-.269-4.33-.807-1.212-.538-2.166-1.288-2.863-2.25-.69-.962-1.08-2.079-1.17-3.352h2.908c.076.879.371 1.606.887 2.182.522.568 1.181.992 1.977 1.273a8.025 8.025 0 002.59.409c1.077 0 2.043-.175 2.898-.523.857-.356 1.535-.849 2.035-1.477.5-.637.75-1.379.75-2.228 0-.772-.216-1.401-.648-1.886-.432-.485-1-.879-1.705-1.182a17.877 17.877 0 00-2.284-.795l-2.863-.818c-1.819-.523-3.258-1.269-4.319-2.239-1.06-.97-1.59-2.239-1.59-3.807 0-1.303.352-2.439 1.056-3.409.713-.977 1.667-1.735 2.864-2.273 1.204-.545 2.55-.818 4.034-.818 1.5 0 2.833.269 4 .807 1.167.53 2.091 1.257 2.773 2.182a5.433 5.433 0 011.09 3.147h-2.727zm14.406 17.819c-1.576 0-2.959-.375-4.148-1.125-1.182-.75-2.106-1.8-2.773-3.148-.659-1.349-.988-2.924-.988-4.727 0-1.819.33-3.406.988-4.762.667-1.356 1.591-2.409 2.773-3.159 1.19-.75 2.572-1.125 4.148-1.125 1.576 0 2.954.375 4.136 1.125 1.19.75 2.114 1.803 2.773 3.159.666 1.356 1 2.943 1 4.762 0 1.803-.334 3.378-1 4.727-.66 1.348-1.584 2.398-2.773 3.148-1.182.75-2.56 1.125-4.136 1.125zm0-2.409c1.197 0 2.181-.307 2.954-.921.773-.614 1.345-1.42 1.716-2.42s.557-2.084.557-3.25c0-1.167-.186-2.254-.557-3.262-.371-1.007-.943-1.822-1.716-2.443s-1.757-.932-2.954-.932c-1.197 0-2.182.311-2.955.932-.773.621-1.344 1.436-1.716 2.443-.371 1.008-.557 2.095-.557 3.262 0 1.166.186 2.25.557 3.25.371 1 .943 1.806 1.716 2.42.773.614 1.758.921 2.955.921zm14.684-21.228V481h-2.681v-23.273h2.681zm19.185 5.818L119.366 481h-2.727l-6.454-17.455h2.909l4.818 13.91h.182l4.818-13.91h2.909zm10.233 17.819c-1.682 0-3.133-.372-4.352-1.114-1.212-.75-2.148-1.795-2.807-3.136-.652-1.349-.977-2.917-.977-4.705 0-1.788.325-3.364.977-4.727.659-1.371 1.576-2.44 2.75-3.205 1.182-.772 2.56-1.159 4.136-1.159.909 0 1.807.152 2.693.455a6.664 6.664 0 012.421 1.477c.727.674 1.307 1.568 1.739 2.682.431 1.113.647 2.485.647 4.113v1.137h-13.454v-2.318h10.727c0-.985-.197-1.864-.591-2.637a4.451 4.451 0 00-1.659-1.829c-.712-.447-1.553-.671-2.523-.671-1.068 0-1.992.265-2.772.796a5.228 5.228 0 00-1.785 2.045 6.02 6.02 0 00-.625 2.705v1.545c0 1.318.228 2.436.682 3.352.462.91 1.103 1.603 1.921 2.08.818.47 1.769.705 2.852.705.705 0 1.341-.099 1.909-.296a4.075 4.075 0 001.489-.909 4.15 4.15 0 00.966-1.523l2.591.728a5.765 5.765 0 01-1.375 2.318c-.644.659-1.44 1.174-2.387 1.545-.947.364-2.011.546-3.193.546zm17.898 0c-1.455 0-2.739-.368-3.853-1.103-1.113-.742-1.984-1.788-2.613-3.136-.629-1.356-.943-2.958-.943-4.807 0-1.833.314-3.424.943-4.773.629-1.348 1.504-2.39 2.625-3.125 1.121-.734 2.416-1.102 3.886-1.102 1.137 0 2.034.19 2.693.568.667.372 1.175.796 1.523 1.273.356.47.633.856.83 1.159h.227v-8.591h2.682V481h-2.591v-2.682h-.318c-.197.318-.478.72-.841 1.205-.364.477-.883.905-1.557 1.284-.674.371-1.572.557-2.693.557zm.363-2.409c1.076 0 1.985-.281 2.728-.841.742-.569 1.306-1.353 1.693-2.353.386-1.007.579-2.17.579-3.488 0-1.303-.189-2.443-.568-3.421-.379-.985-.939-1.75-1.682-2.295-.742-.553-1.659-.83-2.75-.83-1.136 0-2.083.292-2.841.875-.75.576-1.314 1.36-1.693 2.353-.371.984-.557 2.09-.557 3.318 0 1.242.19 2.371.569 3.386.386 1.008.954 1.811 1.704 2.409.758.591 1.697.887 2.818.887zm14.875 2.227c-.56 0-1.041-.201-1.443-.602a1.972 1.972 0 01-.602-1.444c0-.56.201-1.041.602-1.443a1.972 1.972 0 011.443-.602c.561 0 1.042.201 1.444.602.401.402.602.883.602 1.443 0 .372-.095.712-.284 1.023a2.115 2.115 0 01-.739.75 1.948 1.948 0 01-1.023.273zm0-12.955c-.56 0-1.041-.2-1.443-.602a1.972 1.972 0 01-.602-1.443c0-.561.201-1.042.602-1.443a1.969 1.969 0 011.443-.603 1.97 1.97 0 011.444.603c.401.401.602.882.602 1.443 0 .371-.095.712-.284 1.023-.182.31-.428.56-.739.75a1.957 1.957 0 01-1.023.272zm23.676 13.091c-1.5 0-2.837-.257-4.011-.773-1.167-.515-2.095-1.231-2.784-2.147-.682-.925-1.053-1.996-1.114-3.216h2.864c.061.75.318 1.398.773 1.943.454.538 1.049.955 1.784 1.25.735.295 1.549.443 2.443.443 1 0 1.886-.174 2.659-.523.773-.348 1.379-.833 1.818-1.454.44-.621.659-1.341.659-2.159 0-.856-.212-1.61-.636-2.262-.424-.659-1.045-1.174-1.864-1.545-.818-.371-1.818-.557-3-.557h-1.863v-2.5h1.863c.925 0 1.735-.166 2.432-.5.705-.333 1.254-.803 1.648-1.409.401-.606.602-1.318.602-2.136 0-.788-.174-1.474-.523-2.057a3.572 3.572 0 00-1.477-1.364c-.629-.325-1.371-.488-2.227-.488-.803 0-1.561.147-2.273.443a4.237 4.237 0 00-1.727 1.261c-.447.546-.689 1.205-.727 1.977h-2.728c.046-1.219.413-2.287 1.103-3.204.689-.924 1.591-1.644 2.704-2.159 1.121-.515 2.352-.773 3.693-.773 1.44 0 2.675.292 3.705.875 1.03.576 1.822 1.337 2.375 2.284a5.98 5.98 0 01.829 3.068c0 1.311-.344 2.428-1.034 3.353-.681.924-1.609 1.564-2.784 1.92v.182c1.47.242 2.618.867 3.443 1.875.826 1 1.239 2.239 1.239 3.716 0 1.265-.345 2.401-1.034 3.409-.682 1-1.614 1.788-2.795 2.364-1.182.575-2.527.863-4.035.863zm20.785-24.682l-7.5 27.864h-2.455l7.5-27.864h2.455zm10.542.773a8.327 8.327 0 012.864.546c.954.356 1.826.947 2.613 1.772.788.818 1.421 1.936 1.898 3.353.477 1.416.716 3.193.716 5.329 0 2.068-.197 3.905-.591 5.511-.386 1.599-.947 2.947-1.682 4.046-.727 1.098-1.613 1.932-2.659 2.5-1.038.568-2.212.852-3.522.852-1.303 0-2.466-.257-3.489-.773a6.839 6.839 0 01-2.5-2.17c-.644-.932-1.057-2.011-1.239-3.239h2.773c.25 1.069.746 1.951 1.489 2.648.75.689 1.738 1.034 2.966 1.034 1.795 0 3.212-.784 4.25-2.352 1.045-1.568 1.568-3.784 1.568-6.648h-.182a7.12 7.12 0 01-1.511 1.648 6.674 6.674 0 01-1.944 1.068 6.807 6.807 0 01-2.272.375c-1.334 0-2.557-.329-3.671-.989-1.106-.666-1.992-1.579-2.659-2.738-.659-1.167-.989-2.5-.989-4 0-1.424.319-2.727.955-3.909a7.37 7.37 0 012.705-2.841c1.166-.705 2.537-1.046 4.113-1.023zm0 2.5c-.954 0-1.814.239-2.579.716a5.15 5.15 0 00-1.807 1.909c-.44.796-.659 1.678-.659 2.648 0 .97.212 1.852.636 2.648a5.094 5.094 0 001.761 1.886c.75.462 1.603.693 2.557.693.72 0 1.39-.14 2.012-.42a5.206 5.206 0 001.625-1.171c.469-.5.837-1.064 1.102-1.693a5.122 5.122 0 00.398-1.989c0-.909-.22-1.761-.659-2.556a5.229 5.229 0 00-1.796-1.932c-.757-.493-1.621-.739-2.591-.739zm20.151 21.409c-1.712 0-3.171-.466-4.375-1.398-1.205-.939-2.125-2.299-2.762-4.079-.636-1.788-.954-3.947-.954-6.477 0-2.516.318-4.663.954-6.444.644-1.787 1.569-3.151 2.773-4.09 1.212-.947 2.667-1.421 4.364-1.421s3.147.474 4.352 1.421c1.212.939 2.136 2.303 2.773 4.09.644 1.781.966 3.928.966 6.444 0 2.53-.319 4.689-.955 6.477-.636 1.78-1.557 3.14-2.761 4.079-1.205.932-2.663 1.398-4.375 1.398zm0-2.5c1.697 0 3.015-.818 3.954-2.454.94-1.637 1.409-3.97 1.409-7 0-2.016-.216-3.731-.647-5.148-.425-1.417-1.038-2.496-1.841-3.239-.796-.742-1.754-1.113-2.875-1.113-1.682 0-2.996.829-3.943 2.488-.947 1.652-1.421 3.989-1.421 7.012 0 2.015.212 3.727.636 5.136.425 1.409 1.035 2.481 1.83 3.216.803.735 1.769 1.102 2.898 1.102z"
          fill="gray"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_25_6"
          x={-4}
          y={-4}
          width={879}
          height={564}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_25_6"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_25_6"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default ProfileCard;
